import { db } from "../firebase/firebase";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

// Firestore Collection
const reportsCollection = collection(db, "reports");

/* ===========================
   GET ALL REPORTS
=========================== */
export const getReports = async () => {
  try {
    const snapshot = await getDocs(reportsCollection);

    // Debug: Number of documents found
    console.log("Documents Found:", snapshot.docs.length);

    // Convert documents to array
    const reports = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Debug: Print reports
    console.log("Reports:", reports);

    return reports;
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};

/* ===========================
   ADD NEW REPORT
=========================== */
export const addReport = async (reportData) => {
  try {
    await addDoc(reportsCollection, {
      ...reportData,
      createdAt: serverTimestamp(),
      status: "Pending",
    });

    console.log("Report Added Successfully");
  } catch (error) {
    console.error("Error adding report:", error);
  }
};

/* ===========================
   UPDATE STATUS
=========================== */
export const updateReportStatus = async (id, status) => {
  try {
    const reportRef = doc(db, "reports", id);

    await updateDoc(reportRef, {
      status,
    });

    console.log("Status Updated");
  } catch (error) {
    console.error(error);
  }
};

/* ===========================
   DELETE REPORT
=========================== */
export const deleteReport = async (id) => {
  try {
    const reportRef = doc(db, "reports", id);

    await deleteDoc(reportRef);

    console.log("Report Deleted");
  } catch (error) {
    console.error(error);
  }
};