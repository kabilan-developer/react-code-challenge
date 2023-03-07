import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const TableSkeleton = (props) => {
  const { count } = props;
  return (
    <Table className="history_table">
      <Thead className="history_table_head">
        <Tr>
          <Th className="text-center">
            <Skeleton height="3em" />
          </Th>
          <Th>
            <Skeleton height="3em" />
          </Th>
          <Th>
            <Skeleton height="3em" />
          </Th>
          <Th>
            <Skeleton height="3em" />
          </Th>
          <Th>
            <Skeleton height="3em" />
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array(count)
          .fill()
          .map((item, index) => {
            return (
              <Tr className="history_table_body">
                <Td><Skeleton height="3em" /></Td>
                <Td><Skeleton height="3em" /></Td>
                <Td><Skeleton height="3em" /></Td>
                <Td><Skeleton height="3em" /></Td>
                <Td><Skeleton height="3em" /></Td>
              </Tr>
            );
          })}
      </Tbody>
    </Table>
  );
};

export default TableSkeleton;
