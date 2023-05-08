import React, {useCallback} from 'react';
import styles from './app.module.scss'
import {
  BookingConferenceRoomForm
} from "../forms/booking-conference-room-form";
import {IFormData} from "../forms/booking-conference-room-form";

function App() {

    const handleFormSubmit = useCallback((formData: IFormData) => {
        console.log(JSON.stringify(formData))
    },[])

  return (
    <div className={styles.app}>
        <main>
            <BookingConferenceRoomForm onSubmit={handleFormSubmit}/>
        </main>
    </div>
  );
}

export default App;
