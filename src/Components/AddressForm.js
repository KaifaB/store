import React, { useState, useEffect } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { Link } from "react-router-dom"
import Field from "../Components/Field"

import { commerce } from '../Commerce/Commerce'

function AddressForm({ checkoutToken, next }) {
    //for use form dependency
    const methods = useForm();
    //all states for countries and subdivisions/states
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    //state of shipping options 
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')
    //set arrays of countries/subdivisions from fetched objects
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}))
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name}))
    const options = shippingOptions.map((opt) => (
        { id: opt.id, label: `${opt.description} - (${opt.price.formatted_with_symbol})` }
        ))
    //async func to fetch our shipping countries from API
    const fetchShippingCountries = async (checkoutTokenId) => {
        const response = await commerce.services.localeListShippingCountries(checkoutTokenId)

        setShippingCountries(response.countries)
        setShippingCountry(Object.keys(response.countries)[0])
    }
    //async func to fetch our subdivisions from API after country selection
    const fetchSubdivisions = async (countryCode) => {
        const response = await commerce.services.localeListSubdivisions(countryCode)

        setShippingSubdivisions(response.subdivisions)
        setShippingSubdivision(Object.keys(response.subdivisions)[0])
    }
    //async func to fetch our shipping options from API after country/subdivision selection
    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })

        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry)
    }, [shippingCountry])

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                <Field name='firstName' label="First Name" type='text'/>
                <Field name='lastName' label="Last Name" type='text'/>
                <Field name='address' label="Address" type='text'/>
                <Field name='email' label="Email" type='email'/>
                <Field name='city' label="City" type='text'/>
                <Field name='zip' label="Zip Code" type='text'/>
                <div className="selections">
                    <label>Country</label>
                    <select value={shippingCountry} onChange={e => {setShippingCountry(e.target.value)}}>
                        {countries.map((country)=>{
                            return(
                                <option key={country.id} value={country.id}>{country.label}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="selections">
                    <label>Subdivision</label>
                    <select value={shippingSubdivision} onChange={e => {setShippingSubdivision(e.target.value)}}>
                        {subdivisions.map((sub)=>{
                            return(
                                <option key={sub.id} value={sub.id}>{sub.label}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="selections">
                    <label>Shipping Options</label>
                    <select value={shippingOption} onChange={e => {setShippingOption(e.target.value)}}>
                        {options.map((sub)=>{
                            return(
                                <option key={sub.id} value={sub.id}>{sub.label}</option>
                            )
                        })}
                    </select>
                </div>
                <br />
                <div>
                    <Link to="/"><button type="button">Back to Home</button></Link>
                    <button type="submit">Next</button>
                </div>
            </form>
        </FormProvider>
    );
}

export default AddressForm;
