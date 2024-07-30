import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
} from "../assets/index.jsx";

export const steps = [
  {
    step: 1,
    image: <Step1 />,
    description:
      "From the Home page, you can access the movies by clicking on 'Book Movie' in the navigation bar or on the 'Book Movie' button on the Home page, as shown in the image next to it.",
  },
  {
    step: 2,
    image: <Step2 />,
    description:
      "Now that you are on the 'Book Movie' page, all currently available movies are displayed. For easier selection, you can choose movies by genres by clicking the 'Choose genre' button or use the search bar to type the exact name of the movie.",
  },
  {
    step: 3,
    image: <Step3 />,
    description:
      "After clicking on a movie, the movie details and trailer are displayed first. If you want to buy tickets for that movie, scroll down the page.",
  },
  {
    step: 4,
    image: <Step4 />,
    description:
      "Now, you first need to select one of the available dates for that movie. The possible dates are marked in black. In this example, the available dates are August 5th, 6th, and 8th.",
  },
  {
    step: 5,
    image: <Step5 />,
    description:
      "By selecting a date, the first available showtime is automatically selected (if this does not suit you, select another one). In this case, it is 5:00 PM, and the type of screening is indicated in parentheses next to it.",
  },
  {
    step: 6,
    image: <Step6 />,
    description:
      "After selecting the date and time, all the chosen movie information is displayed. Then, you choose the number of tickets in 'Number of Seats', which in this example is two tickets, and the total price based on that number is automatically shown above.",
  },
  {
    step: 7,
    image: <Step7 />,
    description:
      "Below the selected 'Number of Seats', in this case two, you choose the same number of available seats as per your preference. Occupied seats are marked in blue.",
  },
  {
    step: 8,
    image: <Step8 />,
    description:
      "Under 'Selected Seats' you will see the seats you have chosen. In this case, the selected seats are A4 and A5. After that, click on 'Proceed to Pay'.",
  },
  {
    step: 9,
    image: <Step9 />,
    description:
      "Here, enter your first name, last name, and email. Below, all selected information is displayed, and at the end, you choose the 'Payment Method'. If everything is correct and you selected 'Cash on Delivery,' click 'Pay,' and you will receive an email as proof, which is necessary for attending the movie. If you selected 'With Card,' clicking 'Pay' will prompt you to fill in the payment fields, and only then will you receive confirmation via email.",
  },
];

export const getAllSteps = () => {
  return steps;
};
