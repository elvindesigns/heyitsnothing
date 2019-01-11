import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
            <header class="site-header is-sticky">
      <div id="particles-js" class="particles-container particles-js"></div>

      <div class="navbar navbar-expand-lg is-transparent" id="mainnav">
        <nav class="container">
          <a
            class="navbar-brand animated"
            data-animate="fadeInDown"
            data-delay=".65"
            href="./"
          >
            <img
              class="logo logo-dark"
              alt="logo"
              src="images/logo.png"
              srcset="images/logo2x.png 2x"
            />
            <img
              class="logo logo-light"
              alt="logo"
              src="images/logo-full-white.png"
              srcset="images/logo-full-white2x.png 2x"
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggle"
          >
            <span class="navbar-toggler-icon">
              <span class="ti ti-align-justify"></span>
            </span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarToggle"
          >
            <ul
              class="navbar-nav animated remove-animation"
              data-animate="fadeInDown"
              data-delay=".9"
            >
             
              <li class="nav-item">
                <a class="nav-link menu-link" href="#how">How to play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link menu-link" href="#faq">Faqs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link menu-link" href="#contact">Contact</a>
              </li>
            </ul>

              <ul class="navbar-btns animated remove-animation" data-animate="fadeInDown" data-delay="1.15">
                  <li class="nav-item lang-switch">
              		<a class="" href="#" data-toggle="dropdown">English <em class="ti ti-angle-down"></em></a>
              		<div class="dropdown-menu">
              			<a class="dropdown-item" href="#">French</a>
              			<a class="dropdown-item" href="#">Chinese</a>
              			<a class="dropdown-item" href="#">Hindi</a>
              		</div>
              	</li>
              	<li class="nav-item"><a class="nav-link btn btn-sm btn-outline menu-link" href="#join">Join Our Whitelist</a></li>
              </ul>
            -->
          </div>
        </nav>
      </div>

      <div
        id="header"
        class="banner banner-full d-flex align-items-center banner-lungwort"
      >
        <div class="background-shape bs-right"></div>
        <div class="container">
          <div class="banner-content">
            <div class="row align-items-center">
              <div class="col-lg-4">
                <div class="header-txt tab-center mobile-center">
                  <h6
                    class="heading-sm-s2 animated"
                    data-animate="fadeInUp"
                    data-delay=".2"
                  >
                    What is Megacryptolotto
                  </h6>
                  <h2 class="animated" data-animate="fadeInUp" data-delay=".3">
                    Megacryptolotto
                  </h2>
                    <p class="lead animated" data-animate="fadeInUp" data-delay=".4">ICO Crypto is a platform for the future of funding that powering dat for the new equity blockchain.</p>
                    <p class="animated" data-animate="fadeInUp" data-delay=".5">While existing solutions offer to solve just one problem at a time, our team is up to build a secure, useful, &amp; easy-to-use product based on private blockchain. It will include easy cryptocurrency payments integration, and even a digital arbitration system.</p>
                    <p class="animated" data-animate="fadeInUp" data-delay=".6">At the end, Our aims to integrate all companies, employees, and business assets into a unified blockchain ecosystem, which will make business truly efficient, transparent, and reliable.</p>
                  <p
                    class="lead animated"
                    data-animate="fadeInUp"
                    data-delay=".4"
                  >
                    Mega Crypto lotto is the world’s first of its kind being the
                    most transparent lottery system built on EOS block-chain
                    technology. <br /><br />
                    Our goal is to give everyone the chance to become a
                    millionaire by creating a very see-through, decentralized,
                    open ledger lottery system to create more crypto
                    millionaires. Draws would be streamed live where everyone
                    can watch it online from anywhere you are in the world.
                  </p>
                </div>
                  <div class="countdown-box text-center animated" data-animate="fadeInUp" data-delay="1.75">
                                           <h6>PRE SALE STARTING IN</h6>
                                           <div class="token-countdown d-flex align-content-stretch" data-date="2018/09/05"></div>
                                           <a href="#" class="btn btn-sm">Sign UP &amp; Join our PRe-Sale list</a>
                                           <ul class="icon-list">
                                               <li><em class="fab fa-bitcoin"></em></li>
                                               <li><em class="fas fa-won-sign"></em></li>
                                               <li><em class="fab fa-cc-visa"></em></li>
                                               <li><em class="fab fa-cc-mastercard"></em></li>
                                           </ul>
                  </div>
              </div>
              <div class="col-lg-8 order-first order-lg-last">
                <div class="animated" data-animate="fadeInUp" data-delay="1.35">
                  <img src="images/bg.jpg" alt="header-image" />
                  <div id="lottotitle">This weeks lucky number</div>
                  <div id="ballHolder">
                    <div
                      class="balls animated"
                      data-animate="rotateInUpLeft"
                      data-delay="1.50"
                      id="ball1"
                    >
                      38
                    </div>
                    <div
                      class="balls animated"
                      data-animate="rotateInDownLeft"
                      data-delay="1.70"
                      id="ball2"
                    >
                      12
                    </div>
                    <div
                      class="balls animated"
                      data-animate="rotateInUpLeft"
                      data-delay="2.00"
                      id="ball3"
                    >
                      2
                    </div>
                    <div
                      class="balls animated"
                      data-animate="rotateInDownLeft"
                      data-delay="2.30"
                      id="ball4"
                    >
                      14
                    </div>
                    <div
                      class="balls animated"
                      data-animate="rotateInUpLeft"
                      data-delay="2.60"
                      id="ball5"
                    >
                      10
                    </div>
                    <div
                      class="balls animated"
                      data-animate="rotateInDownLeft"
                      data-delay="2.90"
                      id="ball6"
                    >
                      22
                    </div>
                      <div class="balls"></div>
                      <div class="balls"></div>
                    -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="section section-pad section-bg-btoa" id="how">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div class="section-head">
              <div class="heading-animation">
                <span class="line-1"></span><span class="line-2"></span>
                <span class="line-3"></span><span class="line-4"></span>
                <span class="line-5"></span><span class="line-6"></span>
                <span class="line-7"></span><span class="line-8"></span>
              </div>
              <h2 class="section-title">How To Play <span>lotto</span></h2>
              <p>
                All lottery tickets bought would be recorded on the EOS
                Blockchain and can be verified via smart contract for 100%
                transparency. No identification is required to bet as this is a
                decentralized space and each winner are personally responsible
                to pay taxes depending on lottery rules guiding the state or
                country of the winners.
              </p>
            </div>
          </div>
        </div>

      

        <div class="row align-items-center">
          <div class="col-md-6">
            <table class="tg">
              <tr>
                <th class="tg-iejp">MATCH</th>
                <th class="tg-iejp">+</th>
                <th class="tg-iejp">MATCH</th>
                <th class="tg-iejp">PRICE</th>
              </tr>
              <tr>
                <td class="tg-urxo">5</td>
                <td class="tg-urxo">+</td>
                <td class="tg-urxo">1</td>
                <td class="tg-urxo">Jackpot</td>
              </tr>
              <tr>
                <td class="tg-urxo">5</td>
                <td class="tg-urxo">+</td>
                <td class="tg-urxo">0</td>
                <td class="tg-urxo">3% of jackpot value</td>
              </tr>
              <tr>
                <td class="tg-urxo">4</td>
                <td class="tg-urxo">+</td>
                <td class="tg-urxo">1</td>
                <td class="tg-urxo">1% of jackpot value</td>
              </tr>
              <tr>
                <td class="tg-urxo">4</td>
                <td class="tg-urxo">+</td>
                <td class="tg-urxo">0</td>
                <td class="tg-urxo">0% of jackpot value</td>
              </tr>
              <tr>
                <td class="tg-urxo">3</td>
                <td class="tg-urxo">+</td>
                <td class="tg-urxo">1</td>
                <td class="tg-urxo">$50</td>
              </tr>
              <tr>
                <td class="tg-urxo">3</td>
                <td class="tg-urxo">+</td>
                <td class="tg-urxo">0</td>
                <td class="tg-urxo">$5</td>
              </tr>
              <tr>
                <td class="tg-urxo">2</td>
                <td class="tg-urxo">+</td>
                <td class="tg-urxo">1</td>
                <td class="tg-urxo">$3</td>
              </tr>
              <tr>
                <td class="tg-urxo">1</td>
                <td class="tg-urxo">+</td>
                <td class="tg-urxo">1</td>
                <td class="tg-urxo">$2</td>
              </tr>
            </table>

            NOTE: TABLE VALUE IS SUBJECT TO CHANGE
          </div>

          <div class="col-md-5 offset-md-1">
            <div class="text-block">
              <p>
                Lottery ticket will cost equivalent of one dollar $1 in
                cryptocurrency and the only form of payment would be Bitcoin,
                EOS and Ethereum.
              </p>
              <p>
                The tickets can be bought directly on the decentralized mobile
                app or from the website at www.megacryptoloto.com.
              </p>
              <p>
                Each player can pick 5 numbers from 0 – 60 and one number from 0
                – 10 for a chance to win the jackpot. The ticket / tickets that
                matched all six numbers wins the jackpot.
              </p>
              <p>
                If more that one ticket wins the jackpot, total value of the
                jackpot would be divided equally by the total amount of winning
                tickets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-pad no-pb section-bg-alt" id="faq">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div class="section-head">
              <h2 class="section-title">
                Frequently asked questions <span>FAQS</span>
              </h2>
              <p>
                Below we’ve provided a list of frequently asked questions to
                enlighten you.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="tab-custom">
              <ul class="nav nav-tabs text-center">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#tab-1"
                    >General</a
                  >
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tab-1">
                  <div class="accordion" id="accordion-1">
                    <div class="card">
                      <div class="card-header">
                        <h5>
                          <a data-toggle="collapse" data-target="#collapse-1-1">
                            What is Megacrypto lotto?<span class="plus-minus"
                              ><span class="ti ti-angle-up"></span
                            ></span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-1-1"
                        class="collapse show"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          <p>
                            Mega Crypto lotto is the world’s first of its kind
                            being the most transparent lottery system built on
                            EOS block-chain technology.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header">
                        <h5>
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-target="#collapse-1-2"
                          >
                            How secure is Megacrypto lotto<span
                              class="plus-minus"
                              ><span class="ti ti-angle-up"></span
                            ></span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-1-2"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          <p>
                            MegaCrypto Crypto - is unique platform; that is
                            secure, smart and easy-to-use platform.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header">
                        <h5>
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-target="#collapse-1-3"
                          >
                            How can I participate in the MegaCrypto Lotto?<span
                              class="plus-minus"
                              ><span class="ti ti-angle-up"></span
                            ></span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-1-3"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          <p>
                            All lottery tickets bought would be recorded on the
                            EOS Blockchain and can be verified via smart
                            contract for 100% transparency. No identification is
                            required to bet as this is a decentralized space and
                            each winner are personally responsible to pay taxes
                            depending on lottery rules guiding the state or
                            country of the winners.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header">
                        <h5>
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-target="#collapse-1-4"
                          >
                            How do I Receive Payments?<span class="plus-minus"
                              ><span class="ti ti-angle-up"></span
                            ></span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-1-4"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body"><p></p></div>
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

    <div class="section section-pad section-bg-alt" id="contact">
      <div class="container">
        <div class="row text-center">
          <div class="col">
            <div class="section-head">
              <h2 class="section-title">
                Contact MEGACRYPTO LOTTO <span>Contact</span>
              </h2>
              <p>
                Any question? Reach out to us and we’ll get back to you shortly.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <ul class="contact-info">
              <li><em class="fa fa-phone"></em><span>+000 0000 0000</span></li>
              <li>
                <em class="fa fa-envelope"></em
                ><span>info@megacryptolotto.com</span>
              </li>
              <li>
                <em class="fa fa-paper-plane"></em
                ><span>Join us on Telegram</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <form
              id="contact-form"
              class="form-message text-center"
              action="form/contact.php"
              method="post"
            >
              <div class="form-results"></div>
              <div class="input-field">
                <input
                  name="contact-name"
                  type="text"
                  class="input-line required"
                />
                <label class="input-title">Your Name</label>
              </div>
              <div class="input-field">
                <input
                  name="contact-email"
                  type="email"
                  class="input-line required email"
                />
                <label class="input-title">Your Email</label>
              </div>
              <div class="input-field">
                <textarea
                  name="contact-message"
                  class="txtarea input-line required"
                ></textarea>
                <label class="input-title">Your Message</label>
              </div>
              <input
                type="text"
                class="d-none"
                name="form-anti-honeypot"
                value=""
              />
              <div class="input-field">
                <button type="submit" class="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="section footer-scetion footer-lungwort">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <ul class="social">
              <li class="animated" data-animate="fadeInUp" data-delay=".1">
                <a href="#"><em class="fab fa-facebook-f"></em></a>
              </li>
              <li class="animated" data-animate="fadeInUp" data-delay=".2">
                <a href="#"><em class="fab fa-twitter"></em></a>
              </li>
              <li class="animated" data-animate="fadeInUp" data-delay=".3">
                <a href="#"><em class="fab fa-youtube"></em></a>
              </li>
              <li class="animated" data-animate="fadeInUp" data-delay=".4">
                <a href="#"><em class="fab fa-github"></em></a>
              </li>
              <li class="animated" data-animate="fadeInUp" data-delay=".5">
                <a href="#"><em class="fab fa-bitcoin"></em></a>
              </li>
              <li class="animated" data-animate="fadeInUp" data-delay=".6">
                <a href="#"><em class="fab fa-medium-m"></em></a>
              </li>
            </ul>
            <a href="index.html" class="footer-logo"
              ><img
                src="images/logo-full-white.png"
                srcset="images/logo-full-white2x.png 2x"
            /></a>
            <span class="copyright-text">
              Copyright &copy; 2018, Mega Crypto Lotto.
              <span
                >Mega crypto loto is not responsible any gambling addiction.
                Play responsibly and consult your local addiction center for
                help.</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
