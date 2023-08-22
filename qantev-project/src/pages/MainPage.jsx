/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Input, Switch } from 'antd';

function MainPage({ providers }) {

  const [filteredProviders, setFilteredProviders] = useState(providers);
  const [isSearchingByAddress, setIsSearchingByAddress] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) =>
        <Link to={`/details/${record.id}`}>
          {text}
        </Link>,

    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }
  ];

  const handleSearch = query => {
    const keywords = query.toLowerCase().split(" "); // Case insensitive search

    const filtered = providers.filter(provider =>  // Order of keywords does not matter
      keywords.every(word =>
        (isSearchingByAddress ? provider.name : provider.address).toLowerCase().includes(word) // Search by address or name
      )
    );

    setFilteredProviders(filtered);
  };

  return (
    <div>
      <h1>Medical Providers</h1>

      <Input
        placeholder="Search by ..."
        onChange={event => handleSearch(event.target.value)} // Updates table in real-time
        style={{ margin: '10px', width: '200px', height: '50%' }}
      />

      <Switch
        checkedChildren="Name"
        unCheckedChildren="Address"
        onChange={checked => checked ? setIsSearchingByAddress(true) : setIsSearchingByAddress(false)}
        style={{ margin: '10px', maxWidth: '100px' }}
      />

      <Table
        rowKey={(record) => record.id} // ID set as primary key of providers
        dataSource={filteredProviders}
        columns={columns}
        style={{ margin: '10px' }}
      />
    </div>
  );
}

export default MainPage;
