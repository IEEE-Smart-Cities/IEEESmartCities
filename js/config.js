/* ===========================================================
   IEEE Smart Cities Dallas — single source of truth
   -----------------------------------------------------------
   EDIT THIS FILE ONLY. Every Sessionize button, every published
   email address, and the sitewide banner read from here, so a
   change here updates all nine pages at once.
   =========================================================== */

window.SC_CONFIG = {

  /* -----------------------------------------------------------
     1. SESSIONIZE CALL FOR SPEAKERS URL  ← REQUIRED BEFORE OUTREACH
     -----------------------------------------------------------
     Paste the final live Sessionize Call for Speakers URL between
     the quotes, e.g. 'https://sessionize.com/ieee-smart-cities-dallas'.

     While this is empty, no "Submit Speaker Proposal" button will
     send public traffic to a dead end: buttons route to the
     Call for Speakers page instead, and the submit block on that
     page shows an "link coming shortly" notice with the shared
     email. Nothing on the site pretends a submission was recorded.
  ----------------------------------------------------------- */
  sessionizeUrl: 'https://sessionize.com/ieee-smart-cities-dallas-2026',

  /* -----------------------------------------------------------
     2. OFFICIAL SHARED CONFERENCE EMAIL
     -----------------------------------------------------------
     Used on Contact, Call for Speakers, Registration and
     in every mailto form. Must match the address configured in
     Sessionize and used in outreach messages.
  ----------------------------------------------------------- */
  email: 'smartcities.dallas@ieee.org',

  /* -----------------------------------------------------------
     3. PUBLIC MILESTONE DATES (Central Time)
     -----------------------------------------------------------
     ISO strings with explicit CT offsets: -05:00 while Central
     Daylight Time is in effect, -06:00 from Nov 1, 2026 onward.
     These drive the sitewide banner and the Agenda / Speakers
     page states, so those pages roll over on their own.
  ----------------------------------------------------------- */
  dates: {
    cfsOpens:          '2026-08-25T00:00:00-05:00', // Tue Aug 25, 2026
    priorityDeadline:  '2026-09-18T23:59:59-05:00', // Fri Sep 18, 2026
    finalDeadline:     '2026-09-30T23:59:59-05:00', // Wed Sep 30, 2026, 11:59 PM CT
    reviewEnds:        '2026-10-08T23:59:59-05:00', // Thu Oct 8, 2026
    notifications:     '2026-10-12T09:00:00-05:00', // Mon Oct 12, 2026
    confirmationDue:   '2026-10-16T17:00:00-05:00', // Fri Oct 16, 2026, 5:00 PM CT
    lineupPublished:   '2026-10-26T09:00:00-05:00', // Mon Oct 26, 2026
    speakerCopyDue:    '2026-10-30T23:59:59-05:00', // Fri Oct 30, 2026
    slidesDue:         '2026-11-06T17:00:00-06:00', // Fri Nov 6, 2026, 5:00 PM CT
    agendaPublished:   '2026-11-13T09:00:00-06:00', // Fri Nov 13, 2026
    slideCutoff:       '2026-11-18T17:00:00-06:00', // Wed Nov 18, 2026, 5:00 PM CT
    eventDay:          '2026-11-21T08:00:00-06:00'  // Sat Nov 21, 2026
  },

  /* -----------------------------------------------------------
     4. DRAFT NOTICE
     -----------------------------------------------------------
     Leave true until the committee has signed off on date, venue
     wording, IEEE branding/disclaimer language, technical sponsorship language,
     the shared email, and the Sessionize URL. When true, a short
     "subject to committee approval" line stays in the footer.
  ----------------------------------------------------------- */
  draftNotice: true
};
