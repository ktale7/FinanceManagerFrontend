import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"; 
import { motion } from "framer-motion";

const stocksData = [
    { name: "Jul", stocks: 4200 },
    { name: "Aug", stocks: 3250 },
    { name: "Sep", stocks: 2463 },
    { name: "Oct", stocks: 4874 },
    { name: "Nov", stocks: 3456 },
    { name: "Dec", stocks: 5976 },
    { name: "Jan", stocks: 2436 },
    { name: "Feb", stocks: 6978 },
    { name: "Mar", stocks: 4657 },
    { name: "Apr", stocks: 4678 },
    { name: "May", stocks: 2345 },
    { name: "Jun", stocks: 1476 },
]

const StockOverviewChart = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    >
    <h2
    className='text-lg font-medium mg-4 text-gray-100'
    >Stocks Overview</h2>

    <div className='h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={stocksData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
                <XAxis dataKey={"name"} stroke='#9ca3af' />
                <YAxis stroke='#9ca3af' />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)", 
                        borderColor: "#4B5563",
                    }}
                    itemStyle={{ color: "#E5E7EB" }}
                />
                    <Line 
                        type='monotone'
                        dataKey='stocks' //y-axis
                        stroke='#6366F1'
                        strokeWidth={3}
                        dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, strokeWidth: 2 }}
                        />

                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default StockOverviewChart