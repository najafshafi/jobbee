import React, { useContext, useEffect, useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { BlockHead, BlockTitle, Button, PreviewCard, Icon } from "../components/Component";
import { OnBoardingsContext } from "../contexts/OnBoardingContext";

import {
  Input,
  Form
} from "reactstrap";
import { useForm } from "react-hook-form";


const AdminHomePageRegister = ({ match }) => {
  const id = match?.params?.id;
  const { onBoardingLaoded, selectedonBoarding, setSelectedonBoarding, getOnBoarding, loading } = useContext(OnBoardingsContext);
  const [imageFile, setImageFile] = useState(null);


  useEffect(() => {
    getOnBoarding(id);
  }, [id]);

  const { errors, register, handleSubmit } = useForm();


  const onFormSubmit = async () => {
    // setLoading(true)

    // if (imageFile) {
    //   const form = new FormData()
    //   form.append('image', imageFile);
    //   genre.image = (await uploadImage(form)).data;
    // }


    // if (modal.create) {

    //   createGenres(genre).then((geners) => {
    //     console.log('geners', geners);
    //     setLoading(false);
    //     setLoadPage(new Date().getMilliseconds())
    //     setModal({ edit: false, create: false });
    //   }).catch((error) => {
    //     console.log('error', error);
    //     setLoading(false);
    //   })
    //   return;
    // }

    // editGenres(genre).then(() => {
    //   setLoading(false);
    //   currentItems.find((item, index) => {
    //     if (item._id === genre._id) {
    //       currentItems[index] = genre;
    //     }
    //   });
    //   setGeners({ ...geners, results: currentItems });
    //   setModal({ edit: false, create: false });
    // })
  };


  if (!onBoardingLaoded) {
    return null;
  }

  return (
    <React.Fragment>
      <Head title="App homepage management" />
      <Form className="row gy-4" onSubmit={handleSubmit(onFormSubmit)}>
      <Content>
        <BlockHead size="sm">
          <div className="d-flex justify-content-between align-center">
            <BlockTitle page>Register on the app.</BlockTitle>
            <Button color="primary">List</Button>
          </div>
        </BlockHead>

        <div>
          <PreviewCard>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th scope="row">Title*</th>
                  <td colSpan={4}>
                    {" "}
                    <div className="form-control-wrap">
                      <div className="input-group input-group-md">
                        <input required type="text" className="form-control" value={selectedonBoarding.title} />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Description*</th>
                  <td colSpan={4}>
                    {" "}
                    <div className="form-control-wrap">
                      <div className="input-group input-group-md">
                        <textarea required onChange={(e) => {
                          selectedonBoarding.description = e.target.value;
                          setSelectedonBoarding({ ...selectedonBoarding });
                        }} value={selectedonBoarding.description} className="form-control" name="Text1" cols="20" rows="2"></textarea>

                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="centered-text vertically-centered ">
                    Image
                  </th>
                  <td colSpan={4}>
                    <ul>
                      <div className="d-flex justify-content-between">
                        {selectedonBoarding.image &&
                          <div className="d-flex gap-lg-2 align-center">
                            <li className="my-1">Uploaded file {selectedonBoarding.image}</li>
                            <Icon className="mx-1" style={{ fontSize: "24px", cursor: "pointer" }} name="cross" />
                          </div>
                        }
                        <Input
                          required
                          type="file"
                          name="image"
                          id="customFile"
                          onChange={(e) => {
                            setImageFile(e.target.files[0])
                          }}
                        />
                      </div>
                      {!selectedonBoarding.image &&
                        <li>*Type: jpg, jpeg, png is possible.</li>
                      }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </PreviewCard>
          <div className="d-flex justify-content-between align-content-center my-5">
            <Button color="danger">Delete</Button>
            <Button color="primary">Enrollment</Button>
          </div>
        </div>
      </Content>
      </Form>
    </React.Fragment >
  );
};

export default AdminHomePageRegister;
