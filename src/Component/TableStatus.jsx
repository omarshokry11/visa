import TableHook from "../Hook/table-hook";
import "./Style/TableStatus.scss";

function TableStatus() {
  const [
    currentRows,
    handleNext,
    handlePrevious,
    handleDownload,
    indexOfLastRow,
    indexOfFirstRow,
    currentPage,
    totalPages,
    handleStatusChange,
    filterStatus,
    filteredData,
  ] = TableHook();

  return (
    <div className="table-status-container">
      <div className="table-header">
        <div>
          <p className="transactions-btn title-btn">Transactions</p>
          <p className="title-btn issued-btn">Issued Cards</p>
        </div>
        <div className="main-btn-container">
          <p className="btn-item btn-download" onClick={handleDownload}>
            Download
          </p>
          <select
            className="btn-item filter-btn"
            onChange={handleStatusChange}
            value={filterStatus}
          >
            <option value="">Filter</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
            <option value="Succeeded">Succeeded</option>
            <option value="Disputed">Disputed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <table
        width="100%"
        style={{
          textAlign: "left",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
          borderCollapse: "collapse",
        }}
        className="table-container"
        id="content-to-download"
      >
        <thead>
          <th style={{ padding: "10px", borderTop: "1px solid #eee" }}>
            Amount
          </th>
          <th style={{ padding: "10px", borderTop: "1px solid #eee" }}>
            Currency
          </th>
          <th style={{ padding: "10px", borderTop: "1px solid #eee" }}>
            Cardholder
          </th>
          <th style={{ padding: "10px", borderTop: "1px solid #eee" }}>
            Status
          </th>
          <th style={{ padding: "10px", borderTop: "1px solid #eee" }}>
            Created
          </th>
        </thead>
        <tbody>
          {currentRows.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "10px", borderTop: "1px solid #eee" }}>
                {item.amount}
              </td>
              <td style={{ padding: "10px", borderTop: "1px solid #eee" }}>
                {item.currency}
              </td>
              <td style={{ padding: "10px", borderTop: "1px solid #eee" }}>
                {item.cardholder}
              </td>
              <td style={{ padding: "10px", borderTop: "1px solid #eee" }}>
                {item.status}
              </td>
              <td style={{ padding: "10px", borderTop: "1px solid #eee" }}>
                {item.created}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>
          Viewing {indexOfFirstRow + 1}-
          {Math.min(indexOfLastRow, filteredData.length)} of{" "}
          {filteredData.length} results
        </span>
        <div className="buttons-container">
          <button onClick={handlePrevious} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableStatus;
