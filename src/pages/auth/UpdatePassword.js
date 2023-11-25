import React, { useState } from "react";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import { Form, Spinner, Alert } from "reactstrap";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { updatepassword } from "../../services/apis";
import * as actionTypes from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";



const UpdatePassword = (props) => {


  const [loading, setLoading] = useState(false);
  const [errorVal, setError] = useState("");
  const [password, setPassword] = useState("");
  const [_password, _setPassword] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const { history } = props;

  const onFormSubmit = () => {
    setLoading(true);
    updatepassword({ password }).then((_) => {
      setLoading(false);
      dispatch({
        type: actionTypes.USER,
        user: { ...user, passwordChangeRequired: 0 },
      });
      history.push(`${process.env.PUBLIC_URL}`);

    }).catch((error) => {
      console.log(error);
      setError(error.response?.data?.message)
      setLoading(false);
    })
  };

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Login" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>

          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Changing the password</BlockTitle>
                <BlockDes>
                  <p>If you log in with a temporary password, The service is available after the first change..</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            {errorVal && (
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {" "}
                  <Icon name="alert-circle" /> {errorVal}
                </Alert>
              </div>
            )}
            <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
              <div className="form-group">

                <div className="form-control-wrap">
                  <input
                    type={"password"}
                    id="password"
                    required
                    onChange={(evt) => {
                      setPassword(evt.target.value)
                    }}
                    name="password"
                    ref={register({ required: "This field is required" })}
                    placeholder="Enter your Password"
                    className={`form-control-lg form-control is-hidden"}`}
                  />
                  {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                </div>

              </div>
              <div className="form-group">


                <div className="form-control-wrap">
                  <input
                    type={"password"}
                    id="re-password"
                    required
                    onChange={(evt) => {
                      _setPassword(evt.target.value)
                    }}
                    name="password"
                    ref={register({ required: "This field is required" })}
                    placeholder="Re-enter your Password"
                    className={`form-control-lg form-control is-hidden"}`}
                  />
                  {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                </div>


              </div>
              <div className="form-group">
                <Button size="lg" className="btn-block" type="submit" color="primary" disabled={password === '' || password !== _password}>
                  {loading ? <Spinner size="sm" color="light" /> : "Confirm"}
                </Button>
              </div>
            </Form>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default UpdatePassword;
