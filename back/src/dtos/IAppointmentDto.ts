interface IAppointmentDto {
    date: Date,
    time: string,
    status: 'active' | 'cancelled' | 'completed',
    userId: number,
    description: string
}

export default IAppointmentDto;