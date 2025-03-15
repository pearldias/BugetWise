import { Home, List, Calendar, CreditCard, BarChart2, Settings } from 'lucide-react';

const sidebar = () => {
    const menuItems = [
        { icon: <Home />, label: "Overview" },
        { icon: <List />, label: "Transactions" },
        { icon: <Calendar />, label: "Scheduled Transactions" },
        { icon: <CreditCard />, label: "Credit Cards" },
        { icon: <BarChart2 />, label: "Budgets" },
        { icon: <Settings />, label: "Settings" }
    ];

    return (
        <div className="w-64 bg-white shadow-lg h-screen p-4 flex flex-col">
            {/* App Logo */}
            <h1 className="text-2xl font-bold text-blue-500 mb-6">BudgetWise</h1>

            {/* Menu Items */}
            <nav className="space-y-2">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-blue-100 rounded-lg cursor-pointer"
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-4 border-t">
                <p className="text-sm text-gray-500">© 2025 BudgetWise</p>
            </div>
        </div>
    );
};

export default sidebar;
