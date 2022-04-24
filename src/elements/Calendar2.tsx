import React from "react";
import '../assets/scss/Calendar.scss';
import "react-dates/initialize";
import {DateRangePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from 'moment';
import 'moment/locale/it'
import Responsive from "react-responsive";

class Calendar2 extends React.Component {

    componentDidMount() {
        moment.locale('it');
    }

    state = {
        startDate: null,
        endDate: null,
        endDateFormatted: null,
        startDateFormatted: null,
        focusedInput: null,
        startDatePlaceholderText: 'Check-in',
        endDatePlaceholderText: 'Check-out',
    };

    handleDateChange(startDate:any, endDate:any) {
        this.setState(() => ({
            endDate,
            startDate,
        }));
        if (startDate != null) {
            this.setState(() => ({
                startDateFormatted: startDate.format("D-MM-Y"),
            }));
        }
        if (endDate != null) {
            this.setState(() => ({
                endDateFormatted: endDate.format("D-MM-Y"),
            }));
        }
    }

    render() {
        return (
            <div className="Calendar2">

                <Mobile>
                    <DateRangePicker
                        startDatePlaceholderText={this.state.startDatePlaceholderText}
                        endDatePlaceholderText={this.state.endDatePlaceholderText}
                        startDate={this.state.startDate}
                        startDateId="start_date_id"
                        endDate={this.state.endDate}
                        endDateId="end_date_id"
                        onDatesChange={({ startDate, endDate }) =>
                            this.handleDateChange(startDate, endDate)
                        }
                        focusedInput={this.state.focusedInput}
                        onFocusChange={(focusedInput) => this.setState({ focusedInput })}
                        numberOfMonths={1}
                        orientation="horizontal"
                        showClearDates
                    />
                </Mobile>

                <Default>
                    <DateRangePicker
                        startDatePlaceholderText={this.state.startDatePlaceholderText}
                        endDatePlaceholderText={this.state.endDatePlaceholderText}
                        startDate={this.state.startDate}
                        startDateId="start_date_id"
                        endDate={this.state.endDate}
                        endDateId="end_date_id"
                        onDatesChange={({ startDate, endDate }) =>
                            this.handleDateChange(startDate, endDate)
                        }
                        focusedInput={this.state.focusedInput}
                        onFocusChange={(focusedInput) => this.setState({ focusedInput })}
                        numberOfMonths={2}
                        orientation="horizontal"
                        showClearDates
                    />
                </Default>
            </div>
        );
    }
}
export default Calendar2;

export const Mobile = (props:any) => <Responsive {...props} maxWidth={767} />;
export const Default = (props:any) => <Responsive {...props} minWidth={768} />;