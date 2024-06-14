/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/lapop-with-books.jpg";

const imageAltText = "A desk with laptop and books";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ParcelPro - Parcel Management Service",
    description:
      "A website made using ReactJS to maintain parcel with Admin, Delivery Man, and User separate dashboard.",
    url: "https://parcel-pro-client.web.app/",
  },
  {
    title: "Fileion Q&A - Question and Answer Website",
    description:
      "A Q&A site made using Laravel and Livewire. Question, Answer, Comment, Reply, Upvote, DownVote, Social Share and so more.",
    url: "https://qna.fileion.com/",
  },
  {
    title: "NearFile",
    description:
      "A software downloading and reviewing website made using WordPress with custome made template.",
    url: "https://nearfile.com/",
  },
  {
    title: "YouTubeDownload",
    description:
      "A YouTube video downloading and converting website made using Django, Python, and PyTube.",
    url: "https://youtubedownload.io/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
