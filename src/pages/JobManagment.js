import React, { useContext, useEffect, useState } from "react";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem, Spinner } from "reactstrap";
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

import Content from "../layout/content/Content";
import { Link } from "react-router-dom";
import moment from "moment";
import { deleteJobs } from "../services/apis";
import { JobsContext } from "../contexts/JobsContext";
import Head from "../layout/head/Head";
import { getTime } from "../utils/Utils";

export const JobTypeOptions = [
  { value: "partime", label: "Partime" },
  { value: "fulltime", label: "Fulltime" },
  { value: "freelancer", label: "Freelancer" },
];


const JobManagment = () => {
  const { loading, data, setJobList, fetchJobs } = useContext(JobsContext);

  const [tablesm, updateTableSm] = useState(false);
  const [onSearch, setonSearch] = useState(true);
  const [keyword, setkeyword] = useState("");

  const [Jobstatus, setJobstatus] = useState(null);
  const [JobType, setJobType] = useState(null);
  const [hiringStatus, setHiringStatus] = useState(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("asc");

  const params = () => {
    const params = { limit, page, sortBy: "createdAt:" + sortBy };
    if (keyword) {
      params.keyword = keyword;
    }

    if (Jobstatus) params.active = Jobstatus.value;
    if (JobType) params.type = JobType.value;
    if (hiringStatus) params.hiringStatus = hiringStatus.value;

    return params;
  };

  useEffect(() => {
    fetchJobs(params());
  }, [page, limit, sortBy, keyword, Jobstatus, JobType, hiringStatus]);

  // onChange function for searching name
  const onFilterChange = (e) => {
    setkeyword(e.target.value);
  };

  const toggle = () => setonSearch(!onSearch);
  const currentItems = data.results;

  const paginate = (page) => setPage(page);

  const selectorCheck = (e) => {
    let newData;
    newData = data.results.map((item) => {
      item.checked = e.currentTarget.checked;
      return item;
    });
    setJobList({ ...data, results: [...newData] });
  };

  const onSelectChange = (e, id) => {
    let newData;
    newData = data.results.map((item) => {
      if (item._id === id) {
        item.checked = e.currentTarget.checked;
      }
      return item;
    });
    setJobList({ ...data, results: [...newData] });
  };

  const [deleteLoading, setDeleteLoading] = useState(false);
  const onDelete = () => {
    setDeleteLoading(true);
    let jobs = data.results.filter((item) => item.checked === true);
    deleteJobs({
      jobs: jobs.map((item) => {
        return { _id: item._id };
      }),
    })
      .then((_) => {
        setDeleteLoading(false);
        fetchJobs(params());
      })
      .catch((error) => {
        console.log(error);
        setDeleteLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Head title="Job Managment"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Job plus</BlockTitle>
              <BlockDes className="text-soft">You have total {data.totalResults} cases</BlockDes>
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
                        options={JobTypeOptions}
                        className="w-200px"
                        value={JobType}
                        placeholder="Job Type"
                        onChange={(e) => {
                          if (JobType === null || JobType?.value !== e.value) {
                            setJobType(e);
                          } else {
                            setJobType(null);
                          }
                        }}
                      />
                    </div>

                  </div>
                </div>
                <div className="card-tools me-n1">
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
                              <Button className="btn-icon btn-trigger toggle" onClick={() => updateTableSm(false)}>
                                <Icon name="arrow-left"></Icon>
                              </Button>
                            </li>

                            <li>
                              <UncontrolledDropdown>
                                <DropdownToggle color="tranparent" className="btn btn-trigger btn-icon dropdown-toggle">
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
                                    <li className={sortBy === "desc" ? "active" : ""}>
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                          setSortBy("desc");
                                        }}
                                      >
                                        DESC
                                      </DropdownItem>
                                    </li>
                                    <li className={sortBy === "asc" ? "active" : ""}>
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                          setSortBy("asc");
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
                        setkeyword("");
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
                <DataTableRow className="nk-tb-col-check">
                  <div className="custom-control custom-control-sm custom-checkbox notext">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      onChange={(e) => selectorCheck(e)}
                      id="uid"
                    />
                    <label className="custom-control-label" htmlFor="uid"></label>
                  </div>
                </DataTableRow>
                <DataTableRow>
                  <span className="sub-text p-2">#</span>
                </DataTableRow>
                <DataTableRow size="mb">
                  <span className="sub-text p-2">Company </span>
                </DataTableRow>
                <DataTableRow size="md">
                  <span className="sub-text p-2">Job Type</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">Bonus</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">Job Title</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">Job Categories</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">Start Date</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">End Date</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">JOB Posting Type</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">Wages amount </span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">Ads Opened </span>
                </DataTableRow>
              </DataTableHead>
              {/*Head*/}
              {currentItems.length > 0
                ? currentItems.map((item, index) => {
                  return (
                    <DataTableItem key={item._id}>
                      <DataTableRow className="nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultChecked={item.checked}
                            id={item._id}
                            key={Math.random()}
                            onChange={(e) => onSelectChange(e, item._id)}
                          />
                          <label className="custom-control-label" htmlFor={item._id}></label>
                        </div>
                      </DataTableRow>
                      <DataTableRow>
                        <Link to={`${process.env.PUBLIC_URL}/job-managment/details/` + item._id}>
                          <span className="text-decoration-underline">{index + 1}</span>
                        </Link>
                      </DataTableRow>

                      {/*
                        Job Should land on copmany page via route
                        */}
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
                        <span>{'Free'}</span>
                      </DataTableRow>
                      <DataTableRow size="mb">
                        <span>{`${item.salary?.value}  ${item.salary?.currency?.title}`}</span>
                      </DataTableRow>
                      <DataTableRow size="mb">
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" defaultChecked={item.ads} id="customSwitch2" />
                          <label className="custom-control-label" htmlFor="customSwitch2"></label>
                        </div>
                      </DataTableRow>
                    </DataTableItem>
                  );
                })
                : null}
            </DataTableBody>
            <div className="card-inner">
              {currentItems.length > 0 ? (
                <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                  <li>
                    <Button
                      color="danger"
                      size="md"
                      disabled={!currentItems.some((item) => item.checked === true)}
                      onClick={() => {
                        onDelete();
                      }}
                    >
                      {deleteLoading ? <Spinner size="sm" color="light" /> : "Delete Selection"}
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
    </React.Fragment>
  );
};

export default JobManagment;
