import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { sampleResultsResponse } from "../../sampleData";
import "jest-styled-components";
import CardGroup from "./CardGroup";
import { Routes } from "../../App.js";
import { BrowserRouter } from "react-router-dom";

const data = [
  {
    title: "I’m looking for help",
    content: [
      "Everyone reacts differently to trauma, and not everyone recovers from a traumatic experience in the same way or time. There is no one solution to heal from it.",
      "Here you can find personalized recommendations, tips and tools to help you cope with trauma.",
    ],
    actionButton: {
      title: "Give me advice",
      path: Routes.HELP,
    },
  },

  {
    title: "I’d like to help",
    content: [
      "Do you have a close one who underwent trauma? Do you need direction on how to help, what to say, what to do, and how to protect yourself?",
      "Or do you want to help those who are dealing with trauma, and are looking for opportunities to do so?",
    ],
    actionButton: {
      title: "Contact me",
      path: "#",
      action: () => {
        setLikeToHelpModalVisible(true);
      },
    },
  },

  {
    title: "I want to talk to someone",
    content: [
      "Sometimes, self-help is not enough, and you might prefer a professional hand to help you cope with trauma.",
      "We created a directory of mental health experts to help you find and connect to the therapist, counselling service, or organisation that resonates best with you.",
    ],
    titleStyle: {
      width: "60%",
    },
    contentStyle: {
      marginTop: 38,
    },
    actionButton: {
      title: "Coming soon",
      path: "/",
      disabled: true,
    },
  },
];

describe("the CardGroup component", () => {
  let container;
  let getByTestId;

  it("should match the snapshot", () => {
    ({ container } = render(
      <BrowserRouter>
        <CardGroup data={data} />
      </BrowserRouter>
    ));

    expect(container).toMatchSnapshot();
  });
});
