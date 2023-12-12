import React, { useContext, useEffect, useState } from "react";
import { DropdownMenu, DropdownToggle, Dropdown, DropdownItem, Spinner } from "reactstrap";

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

const BannerManagment = () => {
  const { loading, data, setJobList, fetchJobs } = useContext(JobsContext);

  const [tablesm, updateTableSm] = useState(false);
  const [onSearch, setonSearch] = useState(true);
  const [keyword, setkeyword] = useState("");

  const [Jobstatus, setJobstatus] = useState(null);
  const [JobType, setJobType] = useState(null);
  const [hiringStatus, setHiringStatus] = useState(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
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

  // const [currentItems, setCurrentItems] = useState();
  // const [selectedIndex, setSelectedIndex] = useState(null);

  // const handleMoveUp = () => {
  //   if (selectedIndex > 0) {
  //     moveItem(selectedIndex, selectedIndex - 1);
  //   }
  // };

  // const handleMoveDown = () => {
  //   if (selectedIndex < currentItems.length - 1) {
  //     moveItem(selectedIndex, selectedIndex + 1);
  //   }
  // };

  // const moveItem = (fromIndex, toIndex) => {
  //   const newItems = [...currentItems];
  //   const [removed] = newItems.splice(fromIndex, 1);
  //   newItems.splice(toIndex, 0, removed);
  //   setCurrentItems(newItems);
  //   setSelectedIndex(toIndex);
  // };

  return (
    <React.Fragment>
      <Head title="Banner Managment" />
      <Content>
        <h3>Banner management</h3>

        <Block>
          <DataTable className="card-stretch text-center">
            <DataTableBody>
              <DataTableHead>
                <DataTableRow>
                  <span className="sub-text p-2">Order</span>
                </DataTableRow>
                <DataTableRow size="mb">
                  <span className="sub-text p-2">Exposure State</span>
                </DataTableRow>
                <DataTableRow size="md">
                  <span className="sub-text p-2">Banner Title</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">Click Count</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">Banner Image</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">Start Date</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">End Date</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text p-2">Registration Date</span>
                </DataTableRow>
              </DataTableHead>
              {/*Head*/}

              {currentItems.length > 0
                ? currentItems.map((item, index) => {
                    return (
                      <DataTableItem key={item._id}>
                        {/* <DataTableRow className={index === selectedIndex ? "selected" : ""}> */}
                        <DataTableRow>
                          <div>
                            <Icon
                              className="mx-1"
                              style={{ fontSize: "24px", cursor: "pointer" }}
                              name="chevron-up-c"
                              // onClick={handleMoveUp}
                            />
                            <Icon
                              style={{ fontSize: "24px", cursor: "pointer" }}
                              name="chevron-down-c"
                              // onClick={handleMoveDown}
                            />
                          </div>
                        </DataTableRow>

                        {/*
                        Job Should land on copmany page via route
                        */}
                        <DataTableRow size="mb">
                          <Dropdown onClick={(ev) => ev.setIsOpen()} toggle={toggle}>
                            <DropdownToggle className="btn-action border border-1" color="white">
                              <span>Exposure</span>
                              <Icon name="downward-ios" />
                            </DropdownToggle>
                            <DropdownMenu>
                              <ul className="link-list-opt">
                                <li>
                                  <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                                    <span>Profile Settings</span>
                                  </DropdownItem>
                                </li>
                                <li>
                                  <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                                    <span>Notifications</span>
                                  </DropdownItem>
                                </li>
                                <li>
                                  <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                                    <span>Another Action</span>
                                  </DropdownItem>
                                </li>
                                <li>
                                  <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                                    <span>Something else here</span>
                                  </DropdownItem>
                                </li>
                              </ul>
                            </DropdownMenu>
                          </Dropdown>
                        </DataTableRow>

                        <DataTableRow size="mb">
                          <span>{JobTypeOptions.find((type) => type.value === item.type)?.label}</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                          <span>{item.bonus}</span>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <div className="image-container">
                            <img
                              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              width="150"
                              height="1500"
                              alt="User img"
                              className="img-fluid object-fit-cover"
                            ></img>
                          </div>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span>{moment(item.endingDate).format("YYYY-MM-DD hh:mm")}</span>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span>{moment(item.startingDate).format("YYYY-MM-DD hh:mm")}</span>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span>{moment(item.endingDate).format("YYYY-MM-DD hh:mm")}</span>
                        </DataTableRow>
                      </DataTableItem>
                    );
                  })
                : null}
            </DataTableBody>
            <div className="card-inner">
              {currentItems.length > 0 ? (
                <div className="align-center justify-content-between">
                  <div>{""}</div>
                  <div style={{ marginLeft: 200 }}>
                    <PaginationComponent
                      itemPerPage={limit}
                      totalItems={data.totalResults}
                      paginate={paginate}
                      currentPage={page}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <div>
                      <Button className="mx-2" color="gray" size="md">
                        Save Order
                      </Button>
                    </div>
                    <Link exact to={`${process.env.PUBLIC_URL}/banner-managment/banner-registration`}>
                      <Button color="gray" size="md">
                        Enrollment
                      </Button>
                    </Link>
                  </div>
                </div>
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

export default BannerManagment;
