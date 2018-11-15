import React from 'react';

import thinking from '../../assets/emoji/thinking.svg';
import eyes from '../../assets/emoji/eyes.svg';
import backpack from '../../assets/emoji/backpack.svg';

export const QUESTIONS = Object.freeze({
  general: {
    title: (
      <div>
        <img className="vertical-align-top emoji" alt="🤔" src={thinking} /> General
      </div>
    ),
    questions: [{
      'What is Local Hack Day?': (
        <div>
          <p className="margin-top-none">
            A local hack day is a beginners friendly hackathon that brings
            students together to build cool tech-related projects over 12 hours.
          </p>
        </div>
      ),
    },
    {
      'How can I officially sign up?': (
        <p className="margin-top-none">Hacker applications are open now, you can click &quot;Register&quot;
        above to access the application.
        </p>
      ),
    },
    {
      'How much does it cost?': (
        <p className="margin-top-none">
          Nothing. Attending UBC&apos;s Local Hack Day is completely free!
        </p>
      ),
    },
    {
      'Who can participate in this hackathon?': (
        <p className="margin-top-none">
          We welcome all students and recent graduates to join us!
          All participants must follow the {
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
              MLH Code of Conduct.
            </a>}
        </p>
      ),
    },
    {
      'Where is the event?': (
        <div>
          <p className="margin-top-none">
            UBC Local Hack Day 2018 will be held in Hugh Dempster Pavilion
            (DMP 301) at the University of British Columbia, Vancouver on December 1st, 2018.
          </p>
        </div>
      ),
    },
    {
      'What if I have never been to a hackathon before?': (
        <p className="margin-top-none">
          Don&apos;t worry! Having programming experience is not a requirement for this event.
          We will have workshops and mentors readily available to help
          students of all technical skill
          levels to kickstart their project.
        </p>
      ),
    },
      // {
      //   "What's it like being a volunteer at nwHacks?": (
      //     <p className="margin-top-none">
      //       {/* Missing on Notion */}
      //     </p>
      //   ),
      // },
    ],
  },
  teams_and_projects: {
    title: (
      <div>
        <img className="vertical-align-top emoji" alt="👀" src={eyes} /> Teams & projects
      </div>
    ),
    questions: [
      {
        'How do teams work?': (
          <p className="margin-top-none">
            Feel free to hack solo or in up to teams of 4.
            (You can hack in more than teams of 4. But if you win, the prizes are
            only meant to be for up to 4 students, so you will have to divide them
            up accordingly on your own)
          </p>
        ),
      },
      {
        "What happens if I don't have a team?": (
          <p className="margin-top-none">
            Don&apos;t worry!
            A lot of hackers just like you are in the same position.
            On the day of the event, we will make sure to pair everyone up with a team
            of hackers so no one gets left out! There will also be an opportunity to connect
            with people and form teams before the event (after you have been chosen to attend).
          </p>
        ),
      },
      {
        'Can I work on my previous projects?': (
          <p className="margin-top-none">
            No, all projects must be built from scratch. However, you are welcome to brainstorm
            ideas beforehand. This rule is strictly adhered to at nwHacks and any team found
            working on previous projects will be automatically disqualified in the event. If
            you are using libraries or tools that you have made in the past, don&apos;t worry, this
            does not apply.
          </p>
        ),
      },
    ],
  },
  logistics: {
    title: (
      <div>
        <img className="vertical-align-top emoji" alt="🎒" src={backpack} /> Logistics
      </div>
    ),
    questions: [
      {
        'What should I bring?': (
          <p className="margin-top-none">
            You must bring a valid student or government issued ID card for check ins.
            Also, bring your laptop, charging cables, any hardware that you plan to
            hack with (if any), and we will provide the rest!
          </p>
        ),
      },
      // {
      //   'Can I come late?': (
      //     <p className="margin-top-none">
      //       {/* Not finalized on Notion */}
      //     </p>
      //   ),
      // },
      {
        'Is travel reimbursement being offered?': (
          <p className="margin-top-none">
            We do not offer travel reimbursements at the moment, but
            we will take good care of you if you can make your way here!
          </p>
        ),
      },
    ],
  },
});
