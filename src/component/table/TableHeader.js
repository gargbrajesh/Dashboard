
import React, { useState, useEffect } from "react";
// import Input from './Controls/Input'
import {
  
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
function TableHeader(props) {
    const {orderBy,order,createSortHandler}=props
    return (
        <TableHead>
            <TableRow>
            <TableCell key="id">
                <TableSortLabel
                  active={orderBy === "id"}
                  direction={orderBy === "id" ? order : "asc"}
                  onClick={createSortHandler("id")}
                >Id</TableSortLabel></TableCell>
              <TableCell key="name">
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={createSortHandler("name")}
                >
                  Name{" "}
                </TableSortLabel>
              </TableCell>
              <TableCell key="email">
                <TableSortLabel
                  active={orderBy === "email"}
                  direction={orderBy === "email" ? order : "asc"}
                  onClick={createSortHandler("email")}
                >
                  Email{" "}
                </TableSortLabel>
              </TableCell>
              <TableCell key="phone">
                <TableSortLabel
                  active={orderBy === "phone"}
                  direction={orderBy === "phone" ? order : "asc"}
                  onClick={createSortHandler("phone")}
                >
                  Phone{" "}
                </TableSortLabel>
              </TableCell>
              <TableCell key="companyname">
                <TableSortLabel
                  active={orderBy === "companyname"}
                  direction={orderBy === "companyname" ? order : "asc"}
                  onClick={createSortHandler("companyname")}
                >
                  Company{" "}
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
    )
}

export default TableHeader
