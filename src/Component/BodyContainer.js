import React, { Component } from "react";
import {
  Container,
  Breadcrumb,
  Col,
  Row,
  Tabs,
  Tab,
  Spinner,
  Table,
  ProgressBar,
  Pagination,
  Popover,
  OverlayTrigger,
  Button,
  Collapse,
} from "react-bootstrap";

class BodyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">Informasi Website</Popover.Header>
        <Popover.Body>
          Website ini dibuat untuk memudahkan dalam pencarian informasi terkini
          tentang berita olahraga
        </Popover.Body>
      </Popover>
    );
    return (
      <div>
        <Container style={{ maxWidth: "76%" }}>
          <Row>
            <Col md={{ span: 6, offset: 7 }}>
              <Breadcrumb style={{ marginLeft: "100px" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Liga Inggris</Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <br />
          <Row className="d-flex flex-row">
            <Col>
              <h5>Rumor Transfer Pemain</h5>
            </Col>
            <Col md={{ span: "1" }} className="d-flex">
              <Spinner animation="border" variant="success" />
              <Spinner animation="grow" variant="success" size="sm" />
            </Col>
          </Row>
          <br />
          <Tabs fill justify defaultActiveKey="semuatransfer">
            <Tab eventKey="semuatransfer" title="Semua Transfer"></Tab>
            <Tab eventKey="ligaprimeringgris" title="Liga Primer Inggris"></Tab>
            <Tab eventKey="seria" title="Serie A"></Tab>
            <Tab eventKey="divisiprimera" title="Divisi Primera"></Tab>
            <Tab eventKey="bundesliga" title="Bundesliga"></Tab>
            <Tab eventKey="liga1indonesia" title="Liga 1 Indonesia"></Tab>
          </Tabs>
          <br />
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>MAROUNE FELLAINI</td>
                <td>MANCHESTER UNITED</td>
                <td>SHANDONG LUNENG</td>
                <td>
                  <ProgressBar striped now={85} label="85%" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>LUIS NANI</td>
                <td>SPORTING CP</td>
                <td>ORLANDO CITY</td>
                <td>
                  <ProgressBar striped now={55} label="55%" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>MAREK HAMSIK</td>
                <td>NAPOLI</td>
                <td>DALIAN YIFANG</td>
                <td>
                  <ProgressBar striped now={95} label="95%" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>SARDAN AZMOUN</td>
                <td>RUBIN KAZAN</td>
                <td>ZENIT ST PETERSBURG</td>
                <td>
                  <ProgressBar striped now={100} label="100%" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>MICHY BATSHUAYI</td>
                <td>CHELSEA</td>
                <td>CRYSTAL PALACE</td>
                <td>
                  <ProgressBar striped now={50} label="50%" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>LUCAS PIAZON</td>
                <td>CHELSEA</td>
                <td>CHIEVO</td>
                <td>
                  <ProgressBar striped now={100} label="100%" />
                </td>
              </tr>
            </tbody>
          </Table>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          <Row xs="auto">
            <Col>
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popover}
              >
                <Button style={{marginRight: "-20px"}}>Informasi</Button>
              </OverlayTrigger>
            </Col>
            <Col>
              <Button onClick={() => this.setState({ open: !this.state.open })}>
                Versi Website
              </Button>
              <Collapse in={this.state.open}>
                <div>Akses Sport V1.0</div>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BodyContainer;
