import React, {useState} from "react";
import { createProperty } from "../services/properties-services"
import Button from '../components/Button/Button';
import styled from "@emotion/styled";
import { Form, Formik } from 'formik';
import Field from "../components/Inputs/Formik/Input";
import InputCR from "../components/Inputs/Formik/InputCR";
import Select from "../components/Inputs/Select/Select";

const WrapperPage = styled.div`
  padding: 32px 10%;
`

const StyledTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.25px;
`

function CreateProperty() {
  const [photos, setPhotos] = useState([]);

  const initialValues = {
    address: '',
    type_operation: 'rent',
    monthly_rent: '',
    maintanance: '',
    type_property: 'house',
    bedrooms: 2,
    bathrooms: 2,
    area: '',
    pets_allowed: '',
    description: 'casa nuevaaaaaaa'
  };

  const handleUpload = (value) => {
    const formData = new FormData();
    photos.forEach((photo) => {
      formData.append('photos[]', photo);
    });
    for(const key in value) {
      formData.append(key, value[key])
    }
    createProperty(formData)
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setPhotos([...photos, ...files]);
  };

  const handleDelete = (photo) => {
    setPhotos(photos.filter((p) => p !== photo));
  };
  return (
    <WrapperPage>
      <StyledTitle>Create a property listing</StyledTitle>
      <Formik initialValues={initialValues} onSubmit={handleUpload}>
        <Form>
          <Field name="address" label="Address" placeholder="start typing to autocomplete" />
          <Field name="monthly_rent" label="Monthly rent" type="number" placeholder="2000" />
          <Field name="maintanance" label="Maintanance" type="number" placeholder="100" />
          <label>Property Type</label>
          <InputCR type='checkbox' id='apartment' name='apartment'>
            Apartment
          </InputCR>
          <InputCR type='checkbox' id='house' name='house'>
            House
          </InputCR>
          <Select name="bedrooms" label="Bedrooms"><option>1</option></Select>
          <Select name="bathrooms" label="Bathrooms"><option>1</option></Select>
          <Field name="area" label="Area" type="number" placeholder="##" />
          <InputCR type='checkbox' id='pets_allowed' name='pets_allowed'>
            Pets Allowed
          </InputCR>
          <small>Allowing pets increases the likehood of renters  liking the property by 9001%. It also makes you a better person.</small>
          <p>About this property</p>
          <textarea name="description" id="description"></textarea>
          <small>Renters will read this first, so highlight any features or important information the apartment has.</small>
          <h2>Photos</h2>
          <p>Upload as many photos as you wish</p>
          <input type="file" onChange={handleFileChange} multiple />
          <div style={{display: "flex"}}>
            {photos?.map((photo) => (
              <div key={photo.name}>
                <img src={URL.createObjectURL(photo)} alt={photo.name} />
                <button type="button" onClick={() => handleDelete(photo)}>Delete</button>
              </div>
            ))}
          </div>
          <Button type={'primary'} typeBtn={'submit'} size={'lg'}>
                Publish Property Listing
          </Button>
        </Form>
      </Formik>
    </WrapperPage>
  );
}

export default CreateProperty;
