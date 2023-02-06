import React from "react";
import miniProfile from "./miniProfile.jpg";
import notetaker from "./img/notetaker.png";
import gbooks from "./img/booksearch.png";
import expenses from "./img/expensetracker.png";
import mvcblog from "./img/mvcblog.png";

export default function Home() {
  return (
    <div class="light-text center fade">
      <div class="vertical-fade"></div>

      <br></br>
      <h1>Hello!</h1>
      <br></br>

      <div className="intro center">
        <img id="profilepic" src={miniProfile} alt="Mini Profile Pic" />
        <div className="intro-words">
          <h6>My name is Efrain</h6>
          <h6>I am a Full Stack Developer.</h6>
          {/* <p>My name is Efrain.</p>
          <p>I am a Full Stack Developer.</p> */}
        </div>
      </div>
      <br></br>
      <div className="intro-words-2">
        <p>
          Here are some of my projects. Please find links to the live URL and/or
          gitHub repo for each application:
        </p>
      </div>

      <div class="flex">
        {/* <a href="https: "> */}
        <section class="app-card">
          <div class="app-title">
            <h4>Expense Tracker app</h4>
          </div>
          <section>
            <div class="app-img app-card-content">
              <img src={expenses} alt="expense screenshot" class="app-img" />
            </div>
            <p class="light-text app-card-text">
              The "Dinero" Expense Tracker App will help you organize and track
              expenses that need to be paid in the future.
            </p>
          </section>
          <a
            href="https://shielded-plateau-68041.herokuapp.com"
            className="glow-on-hover"
          >
            {" "}
            Live URL{" "}
          </a>
          <a
            href="https://github.com/andersonmourot/Expense-Tracker-Project"
            className="glow-on-hover"
          >
            {" "}
            GitHub Repo{" "}
          </a>
        </section>

        {/* <a href=""> */}
        <section class="app-card">
          <div class="app-title">
            <h4>MVC BLog</h4>
          </div>
          <section>
            <div class="app-img app-card-content">
              <img src={mvcblog} alt="mvc screenshot" class="app-img" />
            </div>
            <p class="light-text app-card-text">
              Model-View-Controller (MVC) paradigm to create a blog-style
              website where developers can create an account, edit their
              information, make posts, edit posts, and comment on other user's
              posts.
            </p>
          </section>
          <a
            href=" https://mighty-island-36283.herokuapp.com"
            className="glow-on-hover"
          >
            {" "}
            Live URL{" "}
          </a>
          <a
            href="https://github.com/efraincjr/mvc-techblog"
            className="glow-on-hover"
          >
            {" "}
            GitHub Repo{" "}
          </a>
        </section>

        {/* <a href=""> */}
        <section class="app-card">
          <div class="app-title">
            <h4>Note Taker</h4>
          </div>
          <section>
            <div class="app-img app-card-content">
              <img
                src={notetaker}
                alt="note taker screenshot"
                class="app-img"
              />
            </div>
            <p class="light-text app-card-text">
              This page has been created as a tool for taking and recalling
              notes, as well as presenting the ability to delete the created
              notes as well.
            </p>
          </section>
          <a
            href="https://peaceful-shore-31660.herokuapp.com"
            className="glow-on-hover"
          >
            {" "}
            Live URL{" "}
          </a>
          <a
            href="https://github.com/efraincjr/express-notetaker"
            className="glow-on-hover"
          >
            {" "}
            GitHub Repo{" "}
          </a>
        </section>

        <section class="app-card">
          <div class="app-title">
            <h4>Custom GoogleBooks API Search</h4>
          </div>
          <section>
            <div class="app-img app-card-content">
              <img
                src={gbooks}
                alt="google booksearch screenshot"
                class="app-img"
              />
            </div>
            <p class="light-text app-card-text">
              An app to search google books API - allows users to create an
              account to save titles for later. User must login to save books to
              their account
            </p>
          </section>
          <a
            href=""
            className="glow-on-hover"
          >
            {" "}
            Live URL{" "}
          </a>
          <a
            href=""
            className="glow-on-hover"
          >
            {" "}
            GitHub Repo{" "}
          </a>
        </section>
      </div>

      <br></br>

      <div className="intro-words-2">
        <p>
          For more projects, please click on the link to my gitHub profile in
          the footer below
        </p>
      </div>

      <br></br>
      <div class="vertical-fade-reverse"></div>
    </div>
  );
}
