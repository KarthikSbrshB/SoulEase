import React, { useState } from 'react';
import './journal.css';
import Navbar from '../../Components/NavigBar/navbar'

function journal() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [journalEntryText, setJournalEntryText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (journalEntryText.trim() !== '') {
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      const newEntry = {
        date: formattedDate,
        text: journalEntryText
      };
      setJournalEntries([...journalEntries, newEntry]);
      setJournalEntryText('');
    }
  };

  return (
    <div>

      <Navbar></Navbar>
      <div className="containerJourn">
        <form id="journalForm" onSubmit={handleSubmit}>
          <textarea
            id="journalEntry"
            value={journalEntryText}
            onChange={(e) => setJournalEntryText(e.target.value)}
            placeholder="Write your journal entry here..."
          ></textarea>
          <button className='journalEnt' type="submit">Submit</button>
        </form>
        {journalEntries.map((entry, index) => (
          <div key={index} className="journal-entry">
            <p>{entry.date}</p>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default journal;
