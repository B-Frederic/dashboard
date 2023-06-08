// Style
import css from "./Calendar.css";
// Calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
// Store
import useCalendar from "../../store/Calendar";
// Data
import { createEventId } from "../../data/data";
import { locale } from "moment";

const Calendar = () => {

    const { currentEvents, setCurrentEvents } = useCalendar();

    const handleEvents = async(events) => {
        await Promise.resolve(setCurrentEvents(events))
    }

    const handleDateSelect = (selectInfo) => {
        let title = prompt("Veuillez saisir un titre");
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay,
            })
        }
    }

    const handleEventClick = (clickInfo) => {
        if(confirm("Vous êtes sur de vouloir supprimer ce rendez-vous ?")){
            clickInfo.event.remove();
        }
    }

    return (
        <div className="calendar-container">
            <div>
                <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                headerToolbar={{
                    left: "prev,today,next",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                locale={"fr-FR"}
                allDaySlot={false}
                initialView="timeGridWeek"
                slotDuration={"01:00:00"}
                editable={true}
                selectable={true}
                selectMirro={true}
                dayMaxEvents={true}
                weekends={true}
                nowIndicator={true}
                initialEvents={currentEvents}
                eventsSet={handleEvents}
                select={handleDateSelect}
                eventClick={handleEventClick}
                />
            </div>
        </div>
    );
};

export default Calendar;