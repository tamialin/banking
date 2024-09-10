import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";


const Home = () => {
  const loggedIn = { firstName: "Tamia", lastName: "Lin", email: "tamia@gmail.com"};
  // const loggedIn = { firstName: ""};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          {/* this will call HeaderBox.tsx in components file */}
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENRT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 99.99 }]}
      />
    </section>
  )
}

export default Home