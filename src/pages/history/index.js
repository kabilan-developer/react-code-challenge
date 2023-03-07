import React, { useEffect, useState } from "react";
import { Badge, Container, Stack } from "react-bootstrap";
import { getMethod } from "../../apis";
import TableSkeleton from "../../components/TableSkeleton";
import { DateConverter } from "../../helpers";
import "./style.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Images } from "../../helpers";
import PreviewModal from "./PreviewModal";

const contextPerRow = 10;

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(contextPerRow);
  const [previewShow, setPreviewShow] = useState(false);
  const [search, setSearch] = useState("");
  const [preview, setPreview] = useState({
    title: "",
    article: "",
    detail: "",
  });

  const filtered = historyData.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  const onSearchTable = (e) => {
    let val = e.target.value;
    setSearch(val);
  };

  const handleMoreContent = () => {
    setNext(next + contextPerRow);
  };

  const getSpaceXHistory = async () => {
    try {
      setLoading(true);
      let url = "v4/history";
      let response = await getMethod({ url });
      //   console.log("history res", response);
      setHistoryData(response);
      setLoading(false);
    } catch (e) {
      console.log("err in get history", e);
    }
  };
  useEffect(() => {
    getSpaceXHistory();
  }, []);

  const historyListing = () => {
    return (
      <>
        <Table className="history_table">
          <Thead className="history_table_head">
            <Tr>
              <Th className="text-center">Sno</Th>
              <Th>Title</Th>
              <Th>Details</Th>
              <Th>Date</Th>
              <Th>Article</Th>
              <Th></Th>
            </Tr>
          </Thead>
          {filtered.length > 0 ? (
            <Tbody>
              {filtered?.slice(0, next)?.map((item, index) => (
                <Tr className="history_table_body">
                  <Td className="text-center">{index + 1}</Td>
                  <Td>{item.title.slice(0, 25) + "..."}</Td>
                  <Td>{item.details.slice(0, 40) + "..."}</Td>
                  <Td>{DateConverter(item.event_date_unix)}</Td>
                  <Td>
                    <a href={item.links.article} target="_blank">
                      {!item.links.article
                        ? "--"
                        : item.links.article?.slice(0, 25) + "..."}
                    </a>
                  </Td>
                  <Td>
                    <Badge
                      className="pointer"
                      onClick={() => {
                        setPreviewShow(true);
                        setPreview({
                          ...preview,
                          title: item.title,
                          article: item.links.article,
                          detail: item.details,
                        });
                      }}
                      bg="secondary"
                    >
                      View
                    </Badge>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          ) : (
            <div className="center">No Results</div>
          )}
        </Table>
        <div className="center">
          {next < historyData?.length && (
            <div class="box-3 mt-4" onClick={handleMoreContent}>
              <div class="btn center btn-three">
                <span>Load More +</span>
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <Container>
      <div className="history_container">
        <Stack gap={3}>
          <div className="between">
            <h4 className="center fw-bold mb-0">
              History ({historyData?.length})
            </h4>
            <div className="search_input_box">
              <img
                src={Images.search_menu}
                alt="search"
                className="img-contain"
              />
              <input
                type="text"
                className="search_input"
                placeholder="Search Name"
                value={search}
                onChange={onSearchTable}
              />
            </div>
          </div>
          {loading ? <TableSkeleton count={10} /> : historyListing()}
        </Stack>
      </div>
      <PreviewModal
        previewShow={previewShow}
        setPreviewShow={setPreviewShow}
        preview={preview}
      />
    </Container>
  );
};

export default HistoryPage;
