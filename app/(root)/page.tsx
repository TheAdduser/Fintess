import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = { firstName: 'Bartek', lastName: 'Wrona', email: 'bartek@email.com'};

    return (
        <section className="home">
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions effictiently."
                    />
                    <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{},{}]}
            />
        </section>
    )
}

export default Home