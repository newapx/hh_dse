import { AppointmentModule, KEY_IN_LOCALSTORAGE } from '@/store/appointments'
import { Appointment } from '@/types/appointment'

describe('AppointmentModule', () => {
  it('save item must be in items', () => {
    AppointmentModule.clear()
    const item = new Appointment("1")
    const item2 = new Appointment("2")

    expect(AppointmentModule.items).toHaveLength(0)
    AppointmentModule.addItem(item)
    expect(AppointmentModule.items).toHaveLength(1)
    expect(AppointmentModule.items).toEqual(
      expect.arrayContaining([      
        expect.objectContaining({   
          name: '1'               
        })
      ])
    )
    
    AppointmentModule.addItem(item2)
    expect(AppointmentModule.items).toHaveLength(2)
    expect(AppointmentModule.items).toEqual(
      expect.arrayContaining([      
        expect.objectContaining({   
          name: '2'               
        })
      ])
    )
  })

  it('save and load from localStorage', () => {
    AppointmentModule.clear()
    expect(AppointmentModule.items).toHaveLength(0);

    // add new items 
    AppointmentModule.setItems([
        new Appointment("ls1"),
        new Appointment("ls2"),
        new Appointment("ls3"),
    ]);
    expect(AppointmentModule.items).toHaveLength(3);

    // save
    AppointmentModule.save();
    expect(localStorage.getItem(KEY_IN_LOCALSTORAGE)).toContain("ls1");

    // clear items 
    AppointmentModule.setItems([])
    expect(AppointmentModule.items).toHaveLength(0);
    
    // load items 
    AppointmentModule.load()
    expect(AppointmentModule.items).toHaveLength(3);
  })

  it('add and remove', async () => {
    AppointmentModule.clear()
    expect(AppointmentModule.items).toHaveLength(0);

    // add new items 
    AppointmentModule.setItems([
        new Appointment("ls1"),
        new Appointment("ls2"),
        new Appointment("ls3"),
    ]);
    expect(AppointmentModule.items).toHaveLength(3);
    await AppointmentModule.save();
    expect(localStorage.getItem(KEY_IN_LOCALSTORAGE)).toContain("ls2");
    
    // remove
    AppointmentModule.remove(1);
    expect(AppointmentModule.items).toHaveLength(2);
    expect(localStorage.getItem(KEY_IN_LOCALSTORAGE)).not.toContain("ls2");
    
    // add 
    AppointmentModule.add(new Appointment("ADD1"))
    expect(AppointmentModule.items).toHaveLength(3);
    expect(localStorage.getItem(KEY_IN_LOCALSTORAGE)).toContain("ADD1");
  })
})
