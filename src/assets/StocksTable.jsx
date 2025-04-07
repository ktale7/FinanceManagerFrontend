import { motion } from "framer-motion"
import { Edit, Search, Trash2 } from "lucide-react"
import { useState } from 'react'

const stocksData = [
    { id:1, symbol: "AAPL", name: "Apple", category: "Technology", price: 218.27 },
    { id:2, symbol: "MSFT", name: "Microsoft", category: "Technology", price: 391.26 },
    { id:3, symbol: "AMZN", name: "Amazon", category: "Consumer Discretionary", price: 196.21 },
    { id:3, symbol: "NVDA", name: "NVIDIA", category: "Technology", price: 117.70 },
    { id:3, symbol: "CVS", name: "CVS Health Corp", category: "Healthcare", price: 67.05 },
]

const StocksTable = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredStocks, setFilteredStocks] = useState(stocksData); 
  
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase(); 
    setSearchTerm(term); 
    stocksData.filter(stock => stock.name.toLowerCase().includes(term) || CSSMathProduct.category.toLowerCase().includes(term)); 
    setFilteredStocks; 
  }

  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>

    <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Stocks List</h2>
        <div className='relative'>
            <input 
                type='text'
                placeholder='Search Stocks...'
                className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={handleSearch}
                //onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
    </div>

    <div className='overflow-x-auto'>

        <table className='min-w-full divide-y divide-gray-700'>
            <thead>
                <tr>
                    <th
                        className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
                    >
                        Symbol
                    </th>
                    <th
                        className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
                    >
                        Name
                    </th>
                    <th
                        className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
                    >
                        Category
                    </th>
                    <th
                        className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
                    >
                        Price
                    </th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
                {filteredStocks.map(stock => (
                    <motion.tr key={stock.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                            {stock.symbol}
                        </td>

                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                            {stock.name}
                        </td>

                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'> 
                            {stock.category}
                        </td>

                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'> 
                            ${stock.price.toFixed(2)}
                        </td>
                    </motion.tr>
                ))}
            </tbody>
        </table>

    </div>

    </motion.div>
  )
}

export default StocksTable