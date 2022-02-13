import React from "react";

const heroArray = [
    {
        h2: 'invest in the future',
        p: 'Put your investing ideas into action with a range of investments. Enjoy real benefits and reward on 1stfx.'
    },
    {
        h2: 'Trade in the moment ',
        p: 'Earn in the moment and watch your profit in realtime.'
    },
    {
        h2: 'Trade on the go',
        p: 'Trading on the go has been simplified and made easy to do with 1stfx'
    }
];
const testimonyArray = [
    {
        img: '',
        user: 'Andrew Star',
        country: 'USA',
        testimony: 'I want to say a big thank you to 1stfx, just got my profit of $7500 in my Bank account. This is indeed a trust worthy platform to invest'
    }
];
const investmentArray = [
    {
        id: "BRONZE",
        amount: '$500',
        profit: '$1500',
        gift: '$125',
        duration: 'one week'

    },
    {
        id: "SILVER",
        amount: '$500',
        profit: '$1500',
        gift: '$125',
        duration: 'one week'
    },
    {
        id: "GOLD",
        amount: '$500',
        profit: '$1500',
        gift: '$125',
        duration: 'one week'
    }
];
const Header = () => {
    return(
        <header className="header">
		<div>
			<h1 className="logo">1st<span>fx</span></h1>
			<img src="./img/arrowdown.png" alt="" id="nav-btn" />
		</div>
		<nav className="nav">
			{/* <ul>
				<li><a href="#">HOME </a></li>
				<li><a href="">PLANS</a></li>
				<li><a href="">REVIEWS</a></li>
				<li><a href=".about">ABOUT US</a></li>
				<li><a href="">CONTACT US</a></li>
				<li><a href="./register.html" className="cta">GET STARTED</a></li>
			</ul> */}
		</nav>
        </header>
    );
}
const Tradeview = () => {
    return(<>
        <div style={{width: "100%", height: '74px'}}>
		<iframe scrolling="no" allowtransparency="true" frameborder="0"
			src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A74%2C%22utm_source%22%3A%22bitfxtradex.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D"
			style={{ boxSizing: "border-box", height: "74px", width: "100%"}}></iframe>
	</div>
    </>
    );
}
const Hero = () => {
    return (
        <section className='hero'> 
            <ul>
                {
                    heroArray.map(({h2, p}) =>
                    {
                        return(
                            <li>
                                <h2>{h2}</h2>
                                <p>{p}</p>
                                <div>
                                    <a href="">Get Started</a>
                                    <a href=""> Log in</a>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}
const InvestmentPlans = () => {
    return(
        <section className='investment'>
            <h2>INVESTMENT PLANS</h2>
            <div className="grid">
        {investmentArray.map(({id, amount, profit, gift, duration}) =>{
            return(<article key = {id}> 
                <small>fixed Price</small>
                <h4>{id}</h4>
                <h3>{amount}</h3>
                <ul>
                <li>
						<span id="text">Return:</span>
						<span id="amount"> {profit}</span>
					</li>
					<li>
						<span id="text">Gift Bonus:</span>
						<span id="amount"> {gift}</span>
					</li>
					<li>
						<span id="text">Duration:</span>
						<span id="amount"> {duration}</span>
					</li>
                </ul>
                <button type="submit" id="submit-amount">invest</button>
            </article>
            );
        })}
        </div>
    </section>
    );
}
const Testimonies = () => {
    return(
        <section className='testimonies'>
            {testimonyArray.map(({img , user, country, testimony}) =>{
                return(<article key = {user}> 
                    <header><img src={img}></img></header>
                    <div>
                        <p>{testimony}</p>
                        <p><b>{user}</b> - {country}</p>
                    </div>
                </article>
                );
            })}
        </section>
    );
}
const Footer = () => {
    return <footer class="footer">
		<div class="container">
			<section>
				<h1 class="logo"> 1st<span>fx</span></h1>
				<h3>Buy, sell, trade,invest has been simplified</h3>
					<p>Put your investing ideas into action with a full range of investments. Enjoy
					real benefits and
					rewards on
					1stfx.com</p>
			</section>
			<section>
				<h3>Useful Links</h3>
				<hr />
				<ul>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">About us</a>
					</li>
					<li>
						<a href="">Services</a>
					</li>
					<li>
						<a href="">Terms of service</a>
					</li>
					<li>
						<a href="">Faq</a>

					</li>
					<li>
						<a href="">Privacy policy</a>
					</li>
					<li>
						<a href="#testimonials">Testimonials</a>

					</li>
				</ul>
			</section>
			<section>
				<h3>Get Started</h3>
				<hr />
				<ul>
					<li>
						<a href="./register.html">Get Started</a>

					</li>
					<li>
						<a href="login" class="">Sign Up</a>

					</li>
					<li>
						<a href="login" class="">Sign In</a>

					</li>
					<li>
						<a href="#pricing">Pricing</a>

					</li>
					<li>
						<a href="./payment.html">payment</a>

					</li>
					<li>
						<a href="#contact">Contact us</a>

					</li>
					<li>
						<a href="#testimonials">Testimonials</a>

					</li>
				</ul>
			</section>
			<section>
				<h3>Contact Us</h3>
				<hr />
				<ul>
					<li>Lorem ipsum dolor sit amet.</li>
					<li><b>Phone:</b></li>
					<li><b>Email:</b></li>
				</ul>
			</section>
		</div>
    </footer>
}
function IndexPage (){
    return (
        <>
            <Header />
            <Tradeview />
            <Hero />
            <Testimonies />
            <InvestmentPlans />
            <Footer />
        </>
    );
}

export default IndexPage;