interface IAppointment {
    id: number, 
    date: Date,
    time: string,
    userId: number,
    status: 'active' | 'cancelled' | 'completed',
    description: string
}

export default IAppointment;