import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all data action
export const fetchAllData = createAsyncThunk('data/fetchAllData', async () => {
  const { data } = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
  return data;
});

// Select data based on grouping and ordering
export const selectData = createAsyncThunk(
  'selectData/selectData',
  async ({ group, allTickets, allUsers, orderValue }) => {
    let selectedData = [];
    let user = false;

    if (group === 'status') {
      const uniqueStatuses = [...new Set(allTickets.map(ticket => ticket.status))];
      uniqueStatuses.forEach((status) => {
        const filteredTickets = allTickets.filter(ticket => ticket.status === status);
        selectedData.push({ title: status, value: filteredTickets });
      });
    } else if (group === 'user') {
      user = true;
      allUsers.forEach((user) => {
        const filteredTickets = allTickets.filter(ticket => ticket.userId === user.id);
        selectedData.push({ title: user.name, value: filteredTickets });
      });
    } else {
      const priorityLevels = ["No priority", "Low", "Medium", "High", "Urgent"];
      priorityLevels.forEach((priority, index) => {
        const filteredTickets = allTickets.filter(ticket => ticket.priority === index);
        selectedData.push({ title: priority, value: filteredTickets });
      });
    }

    // Sorting logic
    selectedData.forEach(group => {
      if (orderValue === 'title') {
        group.value.sort((a, b) => a.title.localeCompare(b.title));
      } else if (orderValue === 'priority') {
        group.value.sort((a, b) => b.priority - a.priority);
      }
    });

    return { selectedData, user };
  }
);
