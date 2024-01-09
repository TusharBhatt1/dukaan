import Navbar from "../right/Navbar";
import Overview from "../right/Overview";
import Pagination from "../right/Pagination";
import Transactions from "../right/Transactions";

export default function Dashboard() {
  return (
    <div className="bg-slate-100 w-full flex flex-col justify-between">
      <Navbar />
      <Overview />
      <Transactions />
      <Pagination />
    </div>
  );
}
