import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPatients = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const filteredPatients = registeredUsers.filter(user => user.email !== 'admin@admin.com');
    setPatients(filteredPatients);
  }, []);

  const handleExportCSV = () => {
    const csvHeader = ['S.No', 'Patient Name', 'Email'];
    const rows = filteredPatients.map((p, i) => [i + 1, p.name, p.email]);

    let csvContent = 'data:text/csv;charset=utf-8,'
      + [csvHeader, ...rows].map(e => e.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'registered_patients.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      {/* Header & Search */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-primary">🩺 Registered Patients</h2>
          <p className="text-muted m-0">View and manage the list of registered patients.</p>
        </div>
        <div className="d-flex gap-2 mt-3 mt-md-0 w-100 w-md-50">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="🔍 Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-success shadow-sm" onClick={handleExportCSV}>
            ⬇️ Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      {filteredPatients.length === 0 ? (
        <div className="alert alert-warning text-center shadow-sm">
          No matching patients found.
        </div>
      ) : (
        <div className="table-responsive shadow rounded">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-primary text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Email Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((p, i) => (
                <tr key={i} className="text-center">
                  <td>{i + 1}</td>
                  <td className="fw-semibold text-capitalize">{p.name}</td>
                  <td className="text-secondary">{p.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPatients;