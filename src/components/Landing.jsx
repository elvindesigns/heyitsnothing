import React, { Component } from "react";
import "./Landing.css";
import logoLight from "../images/logo2x.png";
import logoDark from "../images/logo-full-white.png";
import bgPlay from "../images/bg.jpg";

export default class Landing extends Component {
  render() {
    return (
      <div
        className="theme-dark io-lungwort"
        data-spy="scroll"
        data-target="#mainnav"
        data-offset="80"
      >
        <header className="site-header is-sticky has-fixed">
          {/* <div id="particles-js" className="particles-container particles-js">
          </div> */}
          <div className="navbar navbar-expand-lg is-transparent" id="mainnav">
            <nav className="container">
              <a
                className="navbar-brand  remove-animation"
                data-animate="fadeInDown"
                data-delay=".65"
                href="./"
              >
                <img
                  className="logo logo-dark"
                  alt="logo"
                  src={logoLight}
                  srcset={logoLight}
                />
                <img
                  className="logo logo-light"
                  alt="logo"
                  src={logoDark}
                  srcset={logoDark}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggle"
              >
                <span className="navbar-toggler-icon">
                  <span className="ti ti-align-justify" />
                </span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarToggle"
              >
                <ul
                  className="navbar-nav  remove-animation"
                  data-animate="fadeInDown"
                  data-delay=".9"
                >
                  <li className="nav-item">
                    <a className="nav-link menu-link" href="#how">
                      How to play
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link menu-link" href="#faq">
                      Faqs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link menu-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div
            id="header"
            className="banner banner-full d-flex align-items-center banner-lungwort"
          >
            <div className="background-shape bs-right" />
            <div className="container">
              <div className="banner-content">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="header-txt tab-center mobile-center">
                      <h6
                        className="heading-sm-s2 "
                        data-animate="fadeInUp"
                        data-delay=".2"
                      >
                        What is Megacryptolotto
                      </h6>
                      <h2 className="" data-animate="fadeInUp" data-delay=".3">
                        Megacryptolotto
                      </h2>
                      {/* <p
                        className="lead "
                        data-animate="fadeInUp"
                        data-delay=".4"
                      >
                        ICO Crypto is a platform for the future of funding that
                        powering dat for the new equity blockchain.
                      </p>
                      <p className="" data-animate="fadeInUp" data-delay=".5">
                        While existing solutions offer to solve just one problem
                        at a time, our team is up to build a secure, useful,
                        &amp; easy-to-use product based on private blockchain.
                        It will include easy cryptocurrency payments
                        integration, and even a digital arbitration system.
                      </p>
                      <p className="" data-animate="fadeInUp" data-delay=".6">
                        At the end, Our aims to integrate all companies,
                        employees, and business assets into a unified blockchain
                        ecosystem, which will make business truly efficient,
                        transparent, and reliable.
                      </p> */}
                      <p
                        className="lead "
                        data-animate="fadeInUp"
                        data-delay=".4"
                      >
                        Mega Crypto lotto is the world’s first of its kind being
                        the most transparent lottery system built on EOS
                        block-chain technology. <br />
                        <br />
                        Our goal is to give everyone the chance to become a
                        millionaire by creating a very see-through,
                        decentralized, open ledger lottery system to create more
                        crypto millionaires. Draws would be streamed live where
                        everyone can watch it online from anywhere you are in
                        the world.
                      </p>
                    </div>
                    {/* <div
                      className="countdown-box text-center "
                      data-animate="fadeInUp"
                      data-delay="1.75"
                    >
                      <h6>PRE SALE STARTING IN</h6>
                      <div
                        className="token-countdown d-flex align-content-stretch"
                        data-date="2018/09/05"
                      />
                      <a href="" className="btn btn-sm">
                        Sign UP &amp; Join our PRe-Sale list
                      </a>
                      <ul className="icon-list">
                        <li>
                          <em className="fab fa-bitcoin" />
                        </li>
                        <li>
                          <em className="fas fa-won-sign" />
                        </li>
                        <li>
                          <em className="fab fa-cc-visa" />
                        </li>
                        <li>
                          <em className="fab fa-cc-mastercard" />
                        </li>
                      </ul>
                    </div> */}
                  </div>

                  <div className="col-lg-8 order-first order-lg-last">
                    <div className="" data-animate="fadeInUp" data-delay="1.35">
                      <img src={bgPlay} alt="header" />
                      <div id="lottotitle">This weeks lucky number</div>
                      <div id="ballHolder">
                        <div
                          className="balls "
                          data-animate="rotateInUpLeft"
                          data-delay="1.50"
                          id="ball1"
                        >
                          38
                        </div>
                        <div
                          className="balls "
                          data-animate="rotateInDownLeft"
                          data-delay="1.70"
                          id="ball2"
                        >
                          12
                        </div>
                        <div
                          className="balls "
                          data-animate="rotateInUpLeft"
                          data-delay="2.00"
                          id="ball3"
                        >
                          2
                        </div>
                        <div
                          className="balls "
                          data-animate="rotateInDownLeft"
                          data-delay="2.30"
                          id="ball4"
                        >
                          14
                        </div>
                        <div
                          className="balls "
                          data-animate="rotateInUpLeft"
                          data-delay="2.60"
                          id="ball5"
                        >
                          10
                        </div>
                        <div
                          className="balls "
                          data-animate="rotateInDownLeft"
                          data-delay="2.90"
                          id="ball6"
                        >
                          22
                        </div>
                        {/* <div className="balls" />
                        <div className="balls" /> */}
                        -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="section section-pad section-bg-btoa" id="how">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div className="section-head">
                  <div className="heading-animation">
                    <span className="line-1" />
                    <span className="line-2" />
                    <span className="line-3" />
                    <span className="line-4" />
                    <span className="line-5" />
                    <span className="line-6" />
                    <span className="line-7" />
                    <span className="line-8" />
                  </div>
                  <h2 className="section-title">
                    How To Play <span>lotto</span>
                  </h2>
                  <p>
                    All lottery tickets bought would be recorded on the EOS
                    Blockchain and can be verified via smart contract for 100%
                    transparency. No identification is required to bet as this
                    is a decentralized space and each winner are personally
                    responsible to pay taxes depending on lottery rules guiding
                    the state or country of the winners.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6">
                <table className="tg">
                  <tr>
                    <th className="tg-iejp">MATCH</th>
                    <th className="tg-iejp">+</th>
                    <th className="tg-iejp">MATCH</th>
                    <th className="tg-iejp">PRICE</th>
                  </tr>
                  <tr>
                    <td className="tg-urxo">5</td>
                    <td className="tg-urxo">+</td>
                    <td className="tg-urxo">1</td>
                    <td className="tg-urxo">Jackpot</td>
                  </tr>
                  <tr>
                    <td className="tg-urxo">5</td>
                    <td className="tg-urxo">+</td>
                    <td className="tg-urxo">0</td>
                    <td className="tg-urxo">3% of jackpot value</td>
                  </tr>
                  <tr>
                    <td className="tg-urxo">4</td>
                    <td className="tg-urxo">+</td>
                    <td className="tg-urxo">1</td>
                    <td className="tg-urxo">1% of jackpot value</td>
                  </tr>
                  <tr>
                    <td className="tg-urxo">4</td>
                    <td className="tg-urxo">+</td>
                    <td className="tg-urxo">0</td>
                    <td className="tg-urxo">0% of jackpot value</td>
                  </tr>
                  <tr>
                    <td className="tg-urxo">3</td>
                    <td className="tg-urxo">+</td>
                    <td className="tg-urxo">1</td>
                    <td className="tg-urxo">$50</td>
                  </tr>
                  <tr>
                    <td className="tg-urxo">3</td>
                    <td className="tg-urxo">+</td>
                    <td className="tg-urxo">0</td>
                    <td className="tg-urxo">$5</td>
                  </tr>
                  <tr>
                    <td className="tg-urxo">2</td>
                    <td className="tg-urxo">+</td>
                    <td className="tg-urxo">1</td>
                    <td className="tg-urxo">$3</td>
                  </tr>
                  <tr>
                    <td className="tg-urxo">1</td>
                    <td className="tg-urxo">+</td>
                    <td className="tg-urxo">1</td>
                    <td className="tg-urxo">$2</td>
                  </tr>
                </table>
                NOTE: TABLE VALUE IS SUBJECT TO CHANGE
              </div>

              <div className="col-md-5 offset-md-1">
                <div className="text-block">
                  <p>
                    Lottery ticket will cost equivalent of one dollar $1 in
                    cryptocurrency and the only form of payment would be
                    Bitcoin, EOS and Ethereum.
                  </p>
                  <p>
                    The tickets can be bought directly on the decentralized
                    mobile app or from the website at www.megacryptoloto.com.
                  </p>
                  <p>
                    Each player can pick 5 numbers from 0 – 60 and one number
                    from 0 – 10 for a chance to win the jackpot. The ticket /
                    tickets that matched all six numbers wins the jackpot.
                  </p>
                  <p>
                    If more that one ticket wins the jackpot, total value of the
                    jackpot would be divided equally by the total amount of
                    winning tickets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-pad no-pb section-bg-alt" id="faq">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div className="section-head">
                  <h2 className="section-title">
                    Frequently asked questions <span>FAQS</span>
                  </h2>
                  <p>
                    Below we’ve provided a list of frequently asked questions to
                    enlighten you.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="tab-custom">
                  <ul className="nav nav-tabs text-center">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tab-1"
                      >
                        General
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-1">
                      <div className="accordion" id="accordion-1">
                        <div className="card">
                          <div className="card-header">
                            <h5>
                              <a
                                data-toggle="collapse"
                                data-target="#collapse-1-1"
                              >
                                What is Megacrypto lotto?
                                <span className="plus-minus">
                                  <span className="ti ti-angle-up" />
                                </span>
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-1-1"
                            className="collapse show"
                            data-parent="#accordion-1"
                          >
                            <div className="card-body">
                              <p>
                                Mega Crypto lotto is the world’s first of its
                                kind being the most transparent lottery system
                                built on EOS block-chain technology.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <h5>
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-target="#collapse-1-2"
                              >
                                How secure is Megacrypto lotto
                                <span className="plus-minus">
                                  <span className="ti ti-angle-up" />
                                </span>
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-1-2"
                            className="collapse"
                            data-parent="#accordion-1"
                          >
                            <div className="card-body">
                              <p>
                                MegaCrypto Crypto - is unique platform; that is
                                secure, smart and easy-to-use platform.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <h5>
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-target="#collapse-1-3"
                              >
                                How can I participate in the MegaCrypto Lotto?
                                <span className="plus-minus">
                                  <span className="ti ti-angle-up" />
                                </span>
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-1-3"
                            className="collapse"
                            data-parent="#accordion-1"
                          >
                            <div className="card-body">
                              <p>
                                All lottery tickets bought would be recorded on
                                the EOS Blockchain and can be verified via smart
                                contract for 100% transparency. No
                                identification is required to bet as this is a
                                decentralized space and each winner are
                                personally responsible to pay taxes depending on
                                lottery rules guiding the state or country of
                                the winners.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <h5>
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-target="#collapse-1-4"
                              >
                                How do I Receive Payments?
                                <span className="plus-minus">
                                  <span className="ti ti-angle-up" />
                                </span>
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-1-4"
                            className="collapse"
                            data-parent="#accordion-1"
                          >
                            <div className="card-body">
                              <p />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-pad section-bg-alt" id="contact">
          <div className="container">
            <div className="row text-center">
              <div className="col">
                <div className="section-head">
                  <h2 className="section-title">
                    Contact MEGACRYPTO LOTTO <span>Contact</span>
                  </h2>
                  <p>
                    Any question? Reach out to us and we’ll get back to you
                    shortly.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <ul className="contact-info">
                  <li>
                    <em className="fa fa-phone" />
                    <span>+000 0000 0000</span>
                  </li>
                  <li>
                    <em className="fa fa-envelope" />
                    <span>info@megacryptolotto.com</span>
                  </li>
                  <li>
                    <em className="fa fa-paper-plane" />
                    <span>Join us on Telegram</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <form
                  id="contact-form"
                  className="form-message text-center"
                  action="form/contact.php"
                  method="post"
                >
                  <div className="form-results" />
                  <div className="input-field">
                    <input
                      name="contact-name"
                      type="text"
                      className="input-line required"
                    />
                    <label className="input-title">Your Name</label>
                  </div>
                  <div className="input-field">
                    <input
                      name="contact-email"
                      type="email"
                      className="input-line required email"
                    />
                    <label className="input-title">Your Email</label>
                  </div>
                  <div className="input-field">
                    <textarea
                      name="contact-message"
                      className="txtarea input-line required"
                    />
                    <label className="input-title">Your Message</label>
                  </div>
                  <input
                    type="text"
                    className="d-none"
                    name="form-anti-honeypot"
                    value=""
                  />
                  <div className="input-field">
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="section footer-scetion footer-lungwort">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <ul className="social">
                  <li className="" data-animate="fadeInUp" data-delay=".1">
                    <a href="">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="" data-animate="fadeInUp" data-delay=".2">
                    <a href="">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="" data-animate="fadeInUp" data-delay=".3">
                    <a href="">
                      <em className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="" data-animate="fadeInUp" data-delay=".4">
                    <a href="">
                      <em className="fab fa-github" />
                    </a>
                  </li>
                  <li className="" data-animate="fadeInUp" data-delay=".5">
                    <a href="">
                      <em className="fab fa-bitcoin" />
                    </a>
                  </li>
                  <li className="" data-animate="fadeInUp" data-delay=".6">
                    <a href="">
                      <em className="fab fa-medium-m" />
                    </a>
                  </li>
                </ul>
                <a href="index.html" className="footer-logo">
                  <img src={logoLight} srcset={logoLight} alt="Logo" />
                </a>
                <span className="copyright-text">
                  Copyright &copy; 2018, Mega Crypto Lotto.
                  <span>
                    Mega crypto loto is not responsible any gambling addiction.
                    Play responsibly and consult your local addiction center for
                    help.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
