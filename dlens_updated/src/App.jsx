import React, { useEffect, useState } from "react";
import { Row, Col, Card, Select, Menu, Button, Table, Tabs } from "antd";
import "./App.css";
import HeaderComponent from "./Components/Common Components/Header/Header";
import CommonBarChart from "./Components/Common Components/Barchart/Barchart";
import CommonRadialChart from "./Components/Common Components/RadialBarChart/RadialBarChart";
import CommonLineChart from "./Components/Common Components/Linechart/LineChart";
// import { DownOutlined } from "@ant-design/icons";
import data from "./assets/Images/connection.png";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "Item 1",
      },
      {
        key: "2",
        label: "Item 2",
      },
      {
        key: "3",
        label: "Item 3",
      },
    ]}
  />
);
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Numerical",
    children: (
      <Card>
        <Row gutter={[10, 10]}>
          <Col span={10}>
            <CommonRadialChart value={6} title="Score Gauge" />
          </Col>
          <Col
            span={14}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Row gutter={60}>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Base Int Value</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Base Int Value</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Base Int Value</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginTop: "50px" }}>
              <Col
                span={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Base Int Value</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                span={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Base Int Value</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    key: "2",
    label: "Categorical",
    children: (
      <Card>
        <Row gutter={[10, 10]}>
          <Col span={10}>
            <CommonRadialChart value={6} title="Score Gauge" />
          </Col>
          <Col
            span={14}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Row gutter={60}>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Max. Base</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Max Increment</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Max. Change</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginTop: "50px" }}>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Min. Base</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Min. Increment</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Min. Change</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    key: "3",
    label: "Date",
    children: (
      <Card>
        <Row gutter={[10, 10]}>
          <Col span={10}>
            <CommonRadialChart value={6} title="Score Gauge" />
          </Col>
          <Col
            span={14}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Row gutter={60}>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Base</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Increment</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={data}
                    height={30}
                    style={{
                      background: "#f1ecfb",
                      padding: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "#a1a1af" }}>Change</div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#4d4d4d",
                      }}>
                      55
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    ),
  },
];
function App() {
  const LineData = [
    {
      date: "2023-10-26",
      completeness: 80,
    },
    {
      date: "2023-10-27",
      completeness: 85,
    },
    {
      date: "2023-10-28",
      completeness: 92,
    },
    {
      date: "2023-10-29",
      completeness: 78,
    },
    {
      date: "2023-10-30",
      completeness: 95,
    },
    {
      date: "2023-10-31",
      completeness: 88,
    },
    {
      date: "2023-11-01",
      completeness: 90,
    },
    {
      date: "2023-11-02",
      compleence: 75,
    },
    {
      date: "2023-11-03",
      completeness: 98,
    },
    {
      date: "2023-11-04",
      completeness: 82,
    },
  ];
  const { Option } = Select;
  const [tableNames, setTableNames] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");

  const handleTableChange = (value) => {
    setSelectedTable(value);
    console.log("teble selected");
  };
  const dummyTableData = [
    {
      key: "1",
      score: "85",
      order: "High",
    },
    {
      key: "2",
      score: "72",
      order: "Medium",
    },
    {
      key: "3",
      score: "95",
      order: "High",
    },
    {
      key: "4",
      score: "60",
      order: "Low",
    },
    {
      key: "5",
      score: "78",
      order: "Medium",
    },
    {
      key: "6",
      score: "90",
      order: "High",
    },
    {
      key: "7",
      score: "55",
      order: "Low",
    },
    {
      key: "8",
      score: "88",
      order: "High",
    },
    {
      key: "9",
      score: "68",
      order: "Medium",
    },
    {
      key: "10",
      score: "92",
      order: "High",
    },
    {
      key: "11",
      score: "50",
      order: "Low",
    },
    {
      key: "12",
      score: "80",
      order: "Medium",
    },
    {
      key: "13",
      score: "98",
      order: "High",
    },
    {
      key: "14",
      score: "63",
      order: "Low",
    },
    {
      key: "15",
      score: "75",
      order: "Medium",
    },
  ];

  const columns = [
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Order",
      dataIndex: "order",
      key: "order",
    },
  ];

  const [filteredTableData, setFilteredTableData] = useState(dummyTableData);
  const [filteredRow, setFilteredRow] = useState(null);

  const handleRefresh = () => {
    setFilteredTableData(dummyTableData);
    setFilteredRow(null);
    console.log("Table refreshed");
  };

  const onRowClick = (record) => {
    setFilteredRow(record.score);
    console.log("Row clicked:", record);
  };

  const dummyData = [
    { range: "0-25", count: 15 },
    { range: "26-50", count: 30 },
    { range: "51-75", count: 20 },
    { range: "76-100", count: 10 },
  ];

  const [filteredBarChartData, setFilteredBarChartData] = useState(dummyData);

  const handleBarClick = (payload) => {
    console.log("Bar clicked:", payload);
  };

  return (
    <>
      <HeaderComponent />
      <div style={{ padding: "120px 50px" }}>
        <Row style={{ marginBottom: 10 }}>
          <Select
            defaultValue="hola"
            value={selectedTable}
            onChange={handleTableChange}
            style={{
              width: 200,
            }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card title="KDE Analyzer">
              <CommonBarChart
                data={filteredBarChartData}
                onBarClick={handleBarClick}
                gradientBars={true}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="KDE Order"
              extra={
                <Button
                  onClick={handleRefresh}
                  type="primary"
                  style={{ backgroundColor: "  #fe6932" }}>
                  Refresh
                </Button>
              }>
              <Table
                dataSource={filteredTableData}
                columns={columns}
                pagination={false}
                scroll={{ y: "250px" }}
                rowClassName={(record) =>
                  record.score === filteredRow ? "highlighted-row" : ""
                }
                // scroll={{ y: "300px" }}
                onRow={(record) => ({
                  onClick: () => onRowClick(record),
                })}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="KDE Order"
              extra={
                <Button
                  onClick={handleRefresh}
                  type="primary"
                  style={{ backgroundColor: "  #fe6932" }}>
                  Refresh
                </Button>
              }>
              <Table
                dataSource={filteredTableData}
                columns={columns}
                pagination={false}
                scroll={{ y: "250px" }}
                rowClassName={(record) =>
                  record.score === filteredRow ? "highlighted-row" : ""
                }
                // scroll={{ y: "300px" }}
                onRow={(record) => ({
                  onClick: () => onRowClick(record),
                })}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="KDE Order"
              extra={
                <Button
                  onClick={handleRefresh}
                  type="primary"
                  style={{ backgroundColor: "  #fe6932" }}>
                  Refresh
                </Button>
              }>
              <Table
                dataSource={filteredTableData}
                columns={columns}
                pagination={false}
                scroll={{ y: "250px" }}
                rowClassName={(record) =>
                  record.score === filteredRow ? "highlighted-row" : ""
                }
                // scroll={{ y: "300px" }}
                onRow={(record) => ({
                  onClick: () => onRowClick(record),
                })}
              />
            </Card>
          </Col>
        </Row>
        <Card
          width="100%"
          style={{ marginTop: "20px" }}
          title="KDE Score Dimensions">
          <Row gutter={10}>
            <Col span={8}>
              <CommonRadialChart value={6} title="Score Gauge" />
            </Col>
            <Col span={8}>
              <CommonRadialChart value={8} title="Progress" />
            </Col>
            <Col span={8}>
              <CommonRadialChart value={8} title="Progress" />
            </Col>
          </Row>
        </Card>
        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={10}>
            <CommonRadialChart value={6} title="Score Gauge" />
          </Col>
          <Col span={14}>
            <CommonLineChart data={LineData} dataKey="completeness" />
          </Col>
        </Row>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          style={{ marginTop: "20px" }}
        />
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          style={{ marginTop: "20px" }}
        />
      </div>
    </>
  );
}

export default App;
