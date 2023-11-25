import React from "react";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, PreviewCard } from "../../components/Component";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Link } from "react-router-dom";


const Success = () => {
  return (
    <React.Fragment>
      <Head title="Success" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body">
          <div className="brand-logo pb-5">
            <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Success</BlockTitle>
                <BlockDes className="text" style={{ textAlign: 'center' }}>
                  You can now sign in with your new password.
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <div className="form-note-s2 text-center pt-4">
              <Link to={`${process.env.PUBLIC_URL}`}>
                <strong>Return to login</strong>
              </Link>
            </div>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default Success;
