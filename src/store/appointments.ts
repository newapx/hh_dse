import { Mutation, VuexModule, Module, getModule, Action } from 'vuex-module-decorators'
import store from './index'
import { Appointment } from '@/types/appointment'

export const KEY_IN_LOCALSTORAGE = 'store/appintment'; 

@Module({
    dynamic: true,
    namespaced: true,
    name: KEY_IN_LOCALSTORAGE,
    store
})
export class AppointmentStore extends VuexModule  {
    items: Appointment[] = [];

    @Mutation addItem(value: Appointment): void {
        this.items.push(value)
    }

    @Mutation removeItem(index: number): void {
        if (index < this.items.length) this.items.splice(index, 1);
    }

    @Mutation completeItem(index: number): void {
        if (index < this.items.length) this.items[index].complete = !this.items[index].complete;
    }

    @Mutation setItems(value: Appointment[]): void {
        this.items = value ?? []
    }

    @Action add(value: Appointment) {
        this.addItem(value);
        return this.save();
    }
    @Action remove(index: number) {
        this.removeItem(index);
        return this.save();
    }
    @Action complete(index: number) {
        this.completeItem(index);
        return this.save();
    }

    @Action save() {
        localStorage.setItem(KEY_IN_LOCALSTORAGE, JSON.stringify(this.items))
    }

    @Action load() {
        const data = localStorage.getItem(KEY_IN_LOCALSTORAGE)
        if (data) {
            try {
                this.setItems(JSON.parse(data))
            } catch (e) {
                this.clear()
            }
        } else {
            this.clear()
        }
    }

    @Action clear() {
        this.setItems([])
        localStorage.removeItem(KEY_IN_LOCALSTORAGE)
    }
}

export const AppointmentModule = getModule(AppointmentStore)
