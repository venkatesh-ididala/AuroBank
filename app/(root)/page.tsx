import React from 'react';
import HeaderBox from '@/components/HeaderBox'
import TotalBalancebox from '@/components/TotalBalancebox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {

    const loggedIn={firstName: 'Venkatesh',lastName:'Ididala'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type="greeting" 
                title="welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your account and transactions effeciently." />
               
                <TotalBalancebox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1258.34}

                />
                 </header> 

                 RECENT TRANSACTIONS
                 <RightSidebar 
                 user={loggedIn}
                 transactions={[]}
                 banks={[{},{}]} />
                </div>
    </section>
  );
};

export default Home;