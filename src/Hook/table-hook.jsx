import { useState } from "react";
import html2pdf from "html2pdf.js";
import data from "../JSON/data.json";

function TableHook() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState(""); // حالة للتصفية حسب الـ status
  const rowsPerPage = 10; // عدد الصفوف في كل صفحة

  // تصفية البيانات حسب filterStatus
  const filteredData = data.filter(
    (item) => filterStatus === "" || item.status === filterStatus
  );

  // حساب الصفوف المعروضة من البيانات المفلترة فقط
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // حساب عدد الصفحات الإجمالية بناءً على البيانات المفلترة
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // تغيير الصفحة
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // يمكنك إضافة input لاختيار الـ status:
  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // Download
  const handleDownload = () => {
    const element = document.getElementById("content-to-download"); // مكون HTML الذي تريد تحميله
    const options = {
      filename: "data.pdf", // اسم الملف الذي سيحمله المستخدم
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // إعدادات PDF
      html2canvas: {
        scale: 2, // تحسين جودة الصور
        useCORS: true, // السماح بتحميل الصور عبر CORS
      }, // رفع الجودة في الصور
    };
    html2pdf().from(element).set(options).save();
  };

  return [
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
  ];
}

export default TableHook;
