import React, { useContext, useEffect, useState } from "react";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem, Spinner, Badge } from "reactstrap";
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
import { UserContext } from "../contexts/UserContext";
import Head from "../layout/head/Head";
import { Link } from "react-router-dom";
import { getTime } from "../utils/Utils";
import moment from "moment";
import { deleteUsers } from "../services/apis";

export const userTypeOptions = [
  { value: "employer", label: "Company" },
  { value: "employee", label: "Employee" },
];

export const hiringStatusOptions = [
  { value: 0, label: "Yes" },
  { value: 1, label: "No" },
];

export const accountStatusOptions = [
  { value: 0, label: "Pending", color: "warning" },
  { value: 1, label: "Active", color: "success" },
  { value: 2, label: "Suspend", color: "danger" },
];

const UserManagment = () => {
  const { loading, data, setUserList, fetchUsers } = useContext(UserContext);

  const [tablesm, updateTableSm] = useState(false);
  const [onSearch, setonSearch] = useState(true);
  const [keyword, setkeyword] = useState("");

  const [userStatus, setUserStatus] = useState(null);
  const [userType, setUserType] = useState(null);
  const [hiringStatus, setHiringStatus] = useState(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("asc");

  const params = () => {
    const params = { limit, page, sortBy: "createdAt:" + sortBy };
    if (keyword) {
      params.keyword = keyword;
    }

    if (userStatus) params.active = userStatus.value;
    if (userType) params.type = userType.value;
    if (hiringStatus) params.hiringStatus = hiringStatus.value;

    return params;
  };

  useEffect(() => {
    fetchUsers(params());
  }, [page, limit, sortBy, keyword, userStatus, userType, hiringStatus]);

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
    setUserList({ ...data, results: [...newData] });
  };

  const onSelectChange = (e, id) => {
    let newData;
    newData = data.results.map((item) => {
      if (item._id === id) {
        item.checked = e.currentTarget.checked;
      }
      return item;
    });
    setUserList({ ...data, results: [...newData] });
  };

  const [deleteLoading, setDeleteLoading] = useState(false);
  const onDelete = () => {
    setDeleteLoading(true);
    let users = data.results.filter((item) => item.checked === true);
    deleteUsers({
      users: users.map((item) => {
        return { _id: item._id };
      }),
    })
      .then((_) => {
        setDeleteLoading(false);
        fetchUsers(params());
      })
      .catch((error) => {
        console.log(error);
        setDeleteLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Head title="User List"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page> Users</BlockTitle>
              <BlockDes className="text-soft">You have total {data.totalResults} users</BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <DataTable className="card-stretch">
            <div className="card-inner position-relative card-tools-toggle">
              <div className="card-title-group">
                <div className="card-tools">
                  <div className="form-inline flex-nowrap gx-3">
                    <div className="form-wrap">
                      <RSelect
                        options={userTypeOptions}
                        className="w-200px"
                        value={userType}
                        placeholder="User Classification"
                        onChange={(e) => {
                          if (userType === null || userType?.value !== e.value) {
                            setUserType(e);
                          } else {
                            setUserType(null);
                          }
                        }}
                      />
                    </div>

                    <div className="form-wrap">
                      <RSelect
                        options={accountStatusOptions}
                        className="w-200px"
                        value={userStatus}
                        placeholder="User Status"
                        onChange={(e) => {
                          if (userStatus === null || userStatus?.value !== e.value) {
                            setUserStatus(e);
                          } else {
                            setUserStatus(null);
                          }
                        }}
                      />
                    </div>

                    <div className="form-wrap">
                      <RSelect
                        options={hiringStatusOptions}
                        className="w-200px"
                        value={hiringStatus}
                        placeholder="Searching / Hiring"
                        onChange={(e) => {
                          if (hiringStatus === null || hiringStatus?.value !== e.value) {
                            setHiringStatus(e);
                          } else {
                            setHiringStatus(null);
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
                      placeholder="Search by entering a username, email, or phone number."
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
                  <span className="sub-text">#</span>
                </DataTableRow>
                <DataTableRow size="mb">
                  <span className="sub-text">Name</span>
                </DataTableRow>
                <DataTableRow size="md">
                  <span className="sub-text">Phone</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Classification</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Email</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Auth</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Address</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Member Type</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Job Search / Hiring </span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Last Login </span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Period for didnt login</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Status</span>
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
                          <span>{index + 1}</span>
                        </DataTableRow>

                        <DataTableRow size="mb">
                          <Link to={`${process.env.PUBLIC_URL}/user-details/${item._id}`}>{item.name}</Link>
                        </DataTableRow>

                        <DataTableRow size="mb">
                          <span>{item.phone}</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                          <span>{userTypeOptions.find((type) => type.value === item.type)?.label || item.role}</span>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span>{item.email}</span>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span>{item.registeredBy}</span>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span>{item.location ?? "-"}</span>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span>{item.memberShip ?? "General"}</span>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span>{item.hiringStatus ? "Yes" : "No"}</span>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span>{moment(item.lastLogin ?? item.createdAt).format("YYYY-MM-DD hh:mm")}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <span>{getTime(item.lastLogin ?? item.createdAt)}</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                          <Badge color={accountStatusOptions.find((status) => status.value === item.active).color}>
                            {" "}
                            {accountStatusOptions.find((status) => status.value === item.active).label}
                          </Badge>
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
export default UserManagment;
