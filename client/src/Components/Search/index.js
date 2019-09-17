import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ClipLoader from 'react-spinners/ClipLoader'

class Search extends Component {
	state = {
		pharmaciesResult: '',
		medname: '',
		location: '',
		pharmacy: '',
		searchButtonClicked: false,
		loading: false,
		dropdownlocation:["0"],
		dropdownPharmacyname:["0"],

	}
  componentDidMount() {
	let pharmacyNames=[];
	let pharmacyLocation=[];
  let uniqeArray=[];
		axios.get(`/pharmacyDropDown`).then(({ data }) => {
			uniqeArray=data.data;
			pharmacyNames=uniqeArray.map(item => item.pharmacyname);
			pharmacyLocation=uniqeArray.map(item => item.location);
			pharmacyNames=[...new Set(pharmacyNames)]
			pharmacyLocation=[...new Set(pharmacyLocation)]
				this.setState({ dropdownlocation:pharmacyLocation,dropdownPharmacyname:pharmacyNames })

				console.log("hello ", data)

		})
}
	changeInput = ({ target: { value, name } }) => {
		this.setState({ [name]: value, searchButtonClicked: false })
	}

	handleSearch = () => {
		const { medname, location, pharmacy } = this.state
		const { history } = this.props
		this.setState({ searchButtonClicked: true })

		if (!medname) {
			return
		}

		this.setState({ loading: true })

		axios.get(`/api/medicine/${medname}`).then(({ data }) => {
			let result = ''
			if (location && pharmacy) {
				result = data.data.filter(
					ele => ele.location == location && ele.pharmacyname == pharmacy
				)
			} else if (location) {
				result = data.data.filter(ele => ele.location === location)
			} else if (pharmacy) {
				result = data.data.filter(ele => ele.pharmacy === pharmacy)
			} else {
				result = data.data
			}
			this.setState({ loading: false })
			if (result.length !== 0) {
				this.setState({ pharmaciesResult: result, loading: false })
				sessionStorage.setItem('results', JSON.stringify(result))
				history.push({
					pathname: '/results'
				})
			}
		})
	}

	searchByLocation = ({ target: { value } }) => {
		this.setState({ location: value })
	}

	searchByPharmacy = ({ target: { value } }) => {
		this.setState({ pharmacy: value })
	}

	render() {
		const {
			pharmaciesResult,
			medname,
			location,
			pharmacy,
			searchButtonClicked,
			loading,
			dropdownlocation,
			dropdownPharmacyname

		} = this.state
		return (
			<div>
				<p className="span">
					The app is an easy way to search for the medicine you need in your
					next door pharmacy.
				</p>
				<input
					className="searchBar"
					value={medname}
					onChange={this.changeInput}
					type="text"
					name="medname"
				/>
				<button onClick={this.handleSearch}>
					<FontAwesomeIcon icon="search" />
				</button>
				<select
					className="By-Location"
					value={location}
					name="By location"
					onChange={this.searchByLocation}
					>
						<option value="">By Location</option>
					{dropdownlocation.map(element=>
					<option value={element}>{element}</option>
				
					)}
				</select>
				<select
					value={pharmacy}
					name="By pharmacy"
					onChange={this.searchByPharmacy}
					className="By-Pharmacy"
					>
					<option value="">By Pharmacy</option>
					{dropdownPharmacyname.map(element=>
					<option value={element}>{element}</option>
				
					)}
				</select>
				{!medname && searchButtonClicked ? (
					<p className="noMedicineName">Please enter a medicine name</p>
				) : (
					<p></p>
				)}

				{searchButtonClicked && medname && loading && (
					<div className="loadingSearchP ">
						<ClipLoader
							className="loadingSearch"
							sizeUnit={'px'}
							size={35}
							color={'#123abc'}
						/>
					</div>
				)}

				{searchButtonClicked && medname && !loading && !pharmaciesResult && (
					<p className="noResult">There is no result</p>
				)}
			</div>
		)
	}
}
export default Search
