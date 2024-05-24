import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
    Block,
    BlockBetween,
    BlockDes,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    Icon,
    PaginationComponent,
    Button,
    DataTable,
    DataTableBody,
    DataTableHead,
    DataTableRow,
    DataTableItem,
    RSelect,
} from "../components/Component";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem, Spinner } from "reactstrap";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import { JobTypeOptions } from "./JobManagment";
import moment from "moment";
import { options } from "../services/apis";

const DynamicOptions = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({ results: [], totalResults: 0 });

    const { optionType } = useParams();

    const [tablesm, updateTableSm] = useState(false);
    const [onSearch, setonSearch] = useState(true);
    const [keyword, setKeyword] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [loadPage, setLoadPage] = useState(0);


    useEffect(() => {

        setPage(1);
        setLoadPage(loadPage + 1);
        setData({ results: [], totalResults: 0 });


    }, [optionType]);


    const params = () => {
        const params = {
            page: page,
            limit: limit
        };
        if (keyword) {
            params.keyword = keyword;
        }
        return params;
    }
    useEffect(() => {
        setLoading(true);
        options(optionType, params()).then((res) => {
            setData(res.data);
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        });
    }, [optionType, page, limit, keyword, loadPage]);



    const onFilterChange = (e) => {
        setKeyword(e.target.value);
    };

    const toggle = () => setonSearch(!onSearch);
    const paginate = (page) => setPage(page);


    return (
        <React.Fragment>
            <Head title="Job Management"></Head>
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>{optionType}</BlockTitle>
                            <BlockDes className="text-soft">
                                You have total {data.totalResults} cases
                            </BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <Block>
                    <DataTable className="card-stretch text-center">
                        <div className="card-inner position-relative card-tools-toggle">
                            <div className="card-title-group">
                                <div className="card-tools">
                                    <div className="form-inline flex-nowrap gx-3">
                                        <div className="form-wrap">
                                            <RSelect
                                                // options={JobTypeOptions}
                                                className="w-200px"
                                                // value={JobType}
                                                placeholder="All"
                                            // onChange={(e) => {
                                            //     if (!JobType || JobType.value !== e.value) {
                                            //         setJobType(e);
                                            //     } else {
                                            //         setJobType(null);
                                            //     }
                                            // }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-inline flex-nowrap gx-3 mx-5">
                                        <div className="form-wrap">
                                            <RSelect
                                                // options={JobTypeOptions}
                                                className="w-200px"
                                                // value={JobType}
                                                placeholder="name"
                                            // onChange={(e) => {
                                            //     if (!JobType || JobType.value !== e.value) {
                                            //         setJobType(e);
                                            //     } else {
                                            //         setJobType(null);
                                            //     }
                                            // }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className=" card-tools me-n1">
                                    <ul className="btn-toolbar gx-1">
                                        <li>
                                            <a
                                                href="#search"
                                                onClick={(ev) => {
                                                    ev.preventDefault();
                                                    toggle();
                                                }}
                                                className="btn btn-icon search-toggle toggle-search"
                                            >
                                                <Icon name="search"></Icon>
                                            </a>
                                        </li>
                                        <li className="btn-toolbar-sep"></li>
                                        <li>
                                            <div className="toggle-wrap">
                                                <Button
                                                    className={`btn-icon btn-trigger toggle ${tablesm ? "active" : ""}`}
                                                    onClick={() => updateTableSm(true)}
                                                >
                                                    <Icon name="menu-right"></Icon>
                                                </Button>
                                                <div className={`toggle-content ${tablesm ? "content-active" : ""}`}>
                                                    <ul className="btn-toolbar gx-1">
                                                        <li className="toggle-close">
                                                            <Button
                                                                className="btn-icon btn-trigger toggle"
                                                                onClick={() => updateTableSm(false)}
                                                            >
                                                                <Icon name="arrow-left"></Icon>
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle
                                                                    color="tranparent"
                                                                    className="btn btn-trigger btn-icon dropdown-toggle"
                                                                >
                                                                    <Icon name="setting"></Icon>
                                                                </DropdownToggle>
                                                                <DropdownMenu end className="dropdown-menu-xs">
                                                                    <ul className="link-check">
                                                                        <li>
                                                                            <span>Show</span>
                                                                        </li>
                                                                        <li className={limit === 10 ? "active" : ""}>
                                                                            <DropdownItem
                                                                                tag="a"
                                                                                href="#dropdownitem"
                                                                                onClick={(ev) => {
                                                                                    ev.preventDefault();
                                                                                    setLimit(10);
                                                                                }}
                                                                            >
                                                                                10
                                                                            </DropdownItem>
                                                                        </li>
                                                                        <li className={limit === 15 ? "active" : ""}>
                                                                            <DropdownItem
                                                                                tag="a"
                                                                                href="#dropdownitem"
                                                                                onClick={(ev) => {
                                                                                    ev.preventDefault();
                                                                                    setLimit(15);
                                                                                }}
                                                                            >
                                                                                15
                                                                            </DropdownItem>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="link-check">
                                                                        <li>
                                                                            <span>Order</span>
                                                                        </li>
                                                                        <li >
                                                                            <DropdownItem
                                                                                tag="a"
                                                                                href="#dropdownitem"
                                                                                onClick={(ev) => {

                                                                                }}
                                                                            >
                                                                                DESC
                                                                            </DropdownItem>
                                                                        </li>
                                                                        <li >
                                                                            <DropdownItem
                                                                                tag="a"
                                                                                href="#dropdownitem"
                                                                                onClick={(ev) => {
                                                                                    ev.preventDefault();

                                                                                }}
                                                                            >
                                                                                ASC
                                                                            </DropdownItem>
                                                                        </li>
                                                                    </ul>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`card-search search-wrap ${!onSearch && "active"}`}>
                                <div className="card-body">
                                    <div className="search-content">
                                        <Button
                                            className="search-back btn-icon toggle-search active"
                                            onClick={() => {
                                                setKeyword("");
                                                toggle();
                                            }}
                                        >
                                            <Icon name="arrow-left"></Icon>
                                        </Button>
                                        <input
                                            type="text"
                                            className="border-transparent form-focus-none form-control"
                                            placeholder="Search by entering a Jobname, email, or phone number."
                                            value={keyword}
                                            onChange={(e) => onFilterChange(e)}
                                        />
                                        <Button className="search-submit btn-icon">
                                            <Icon name="search"></Icon>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DataTableBody>
                            <DataTableHead>
                                {/* <DataTableRow className="nk-tb-col-check">
                                    <div className="custom-control custom-control-sm custom-checkbox notext">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            onChange={(e) => selectorCheck(e)}
                                            id="uid"
                                        />
                                        <label className="custom-control-label" htmlFor="uid"></label>
                                    </div>
                                </DataTableRow> */}
                                <DataTableRow>
                                    <span className="sub-text p-2">#</span>
                                </DataTableRow>
                                <DataTableRow size="lg">
                                    <span className="sub-text p-2">{optionType} </span>
                                </DataTableRow>
                                <DataTableRow size="lg">
                                    <span className="sub-text p-2">Registration date and time.</span>
                                </DataTableRow>
                            </DataTableHead>
                            {data.results.length > 0
                                ? data.results.map((item, index) => (
                                    <DataTableItem key={item._id}>
                                        <DataTableRow className="nk-tb-col-check">
                                            <div className="custom-control custom-control-sm custom-checkbox notext">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    defaultChecked={item.checked}
                                                    id={item._id}
                                                    onChange={(e) => console.log("Selected")}
                                                />
                                                <label className="custom-control-label" htmlFor={item._id}></label>
                                            </div>
                                        </DataTableRow>
                                        <DataTableRow>
                                            <Link to={`${process.env.PUBLIC_URL}/job-managment/details/` + item._id}>
                                                <span className="text-decoration-underline">{index + 1}</span>
                                            </Link>
                                        </DataTableRow>
                                        <DataTableRow size="mb">
                                            <Link to={`#`}>{item.company?.name}</Link>
                                        </DataTableRow>
                                        <DataTableRow size="mb">
                                            <span>{JobTypeOptions.find((type) => type.value === item.type)?.label}</span>
                                        </DataTableRow>
                                        <DataTableRow size="md">
                                            <span>{item.bonus}</span>
                                        </DataTableRow>
                                        <DataTableRow size="mb">
                                            <span>{item.title}</span>
                                        </DataTableRow>
                                        <DataTableRow size="mb">
                                            <span>{item.career?.title}</span>
                                        </DataTableRow>
                                        <DataTableRow size="mb">
                                            <span>{moment(item.startingDate).format("YYYY-MM-DD hh:mm")}</span>
                                        </DataTableRow>
                                        <DataTableRow size="mb">
                                            <span>{moment(item.endingDate).format("YYYY-MM-DD hh:mm")}</span>
                                        </DataTableRow>
                                        <DataTableRow size="mb">
                                            <span>Free</span>
                                        </DataTableRow>
                                        <DataTableRow size="mb">
                                            <span>{`${item.salary?.value}  ${item.salary?.currency?.title}`}</span>
                                        </DataTableRow>
                                        <DataTableRow size="mb">
                                            <div className="custom-control custom-switch">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    defaultChecked={item.ads}
                                                    id="customSwitch2"
                                                />
                                                <label className="custom-control-label" htmlFor="customSwitch2"></label>
                                            </div>
                                        </DataTableRow>
                                    </DataTableItem>
                                ))
                                : null}
                        </DataTableBody>
                        <div className="card-inner">
                            {data.results.length > 0 ? (
                                <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                    <li>
                                        <Button
                                            color="danger"
                                            size="md"
                                            disabled={!data.results.some((item) => item.checked === true)}
                                            onClick={() => {
                                                console.log("Deleted")
                                            }}
                                        >
                                            {loading ? <Spinner size="sm" color="light" /> : "Delete Selection"}
                                        </Button>
                                    </li>
                                    <li>
                                        <PaginationComponent
                                            itemPerPage={limit}
                                            totalItems={data.totalResults}
                                            paginate={paginate}
                                            currentPage={page}
                                        />
                                    </li>
                                </ul>
                            ) : (
                                <div className="text-center">
                                    <span className="text-silent">{!loading && "No data found"}</span>
                                    {loading && (
                                        <div className="loading-layer">
                                            <Spinner color="primary" />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </DataTable>
                </Block>
            </Content>
        </React.Fragment >
    );
};

export default DynamicOptions;
