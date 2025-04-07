import Header from "../Components/Header";
import { motion } from "framer-motion";
import Statcard from "../Components/Statcard";
import { Zap } from "lucide-react";
import StockOverviewChart from "../assets/StockOverviewChart";
import CategoryDistributionChart from "../assets/CategoryDistributionChart";
import StocksTable from "../assets/StocksTable";

const Portfolio = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Portfolio" />

      <main className='max-w-7x1 mx-auto py-6 px-4 lg:px-8'>
        {/*STATS */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Statcard name="Total Invested" icon={Zap} value='$$$' color='#6366F1'/> 
          <Statcard name="Total Invested" icon={Zap} value='$$$' color='#6366F1'/>
        </motion.div>

        {/* CHARTS */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <StockOverviewChart />
          <CategoryDistributionChart/>
          <StocksTable />
        </div>
      </main>
    </div>

  )
}

export default Portfolio; 