#Create an appointments app.

The app will have allow to create appointments, remove them and mark as completed.
 

##Page1 - "Appointments"

    Will show a list of upcoming appointments.
    Each item in the list will show date and name for the appointment, "remove" button, "complete" checkbox.
    Remove will have a confirmation dialog and once confirmed remove the appointment.

##Page2 - "Make Appointments"

    Tab1 - "Info"  with contain the following:
·         Date - date picker(mandatory)
·         Full name  - text field(mandatory)
·         Note - text field(optional)
·         Next button
·         Back button (will go to the appointments page)

    Tab2  - "Confirmation" 

·         Will show the details from the first tab as read only
·         Will have a create button.(will store the data and go to Appointments page)
·         Will have back button. (will go to Info tab)
 

##General  guidelines

    Use Vuex store with data saving to local storage (no backend)
    Use Vue router for navigation
    Upon reload – we should see the save data
    Tabs must be individual components outside of parent page component
    Provide a link to git repository with the task
    No need to waste time on styling, but the app should have a clear look.
    You can use any libraries needed