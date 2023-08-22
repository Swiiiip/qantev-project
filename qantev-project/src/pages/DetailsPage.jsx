/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import ErrorPage from "./ErrorPage";
import { Statistic, Card, Row, Col } from 'antd';
import { PhoneFilled } from '@ant-design/icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function DetailsPage({ providers }) {
  const { id } = useParams();
  const provider = providers.find(p => p.id === parseInt(id) );

  if (!provider) {
    return <ErrorPage error={"ID '" + id + "' is not recognized"} />;
  }
  
  const position = provider.coordinates ? provider.coordinates : [0, 0]; // Default coordinates if not provided

  return (
    <div >
      <h1>{provider.name}</h1>

      <div style={{ margin: '20px' }}>
        <div style={{ fontSize: '150%' }}>
          <PhoneFilled /> <a href={"tel:" + provider.phone_number}>{provider.phone_number}</a> 
        </div>

        <br />

        <Row gutter={20} >
          <Col span={10}>
            <Statistic title="Average Patient Age" value={provider.average_patient_age} suffix="yo" />
          </Col>
          <Col span={10}>
            <Statistic title="Average Inpatient Claim Cost" value={provider.average_inpatient_claim_cost} suffix="€" />
          </Col>
        </Row>
        <br /><br />
        <Row gutter={10} >
          <Col span={10}>
            <Statistic title="Total Cost" value={provider.total_cost} suffix="€" />
          </Col>
          <Col span={10}>
            <Statistic title="Average Outpatient Claim Cost" value={provider.average_outpatient_claim_cost} suffix="€" />
          </Col>
        </Row>

        <br /><br />

        <Card title="Their location" style={{ maxWidth: "100vw" }}>
          <b>{provider.address}<br /></b>
          {provider.coordinates ? ('[ ' + position[0] + ' ; ' + position[1] + ' ]') : 'No coordinates shared :/'}<br /><br />

          <a href={"https://www.google.com/maps/search/?api=1&query=" + position[0] + "," + position[1]} >Open in Google Maps</a>
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={true}
            style={{ minHeight: "90vh" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
              <Popup>
                <b>{provider.name}</b> <br /> @ <i>{provider.address}</i>
              </Popup>
            </Marker>

          </MapContainer>

        </Card>
      </div>
    </div>
  );
}

export default DetailsPage;
