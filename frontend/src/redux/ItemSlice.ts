import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";
import fetchData from "../services/fetchData";
import ItemType from "../types/ItemType";

export interface ItemState {
  loading: boolean;
  items: ItemType[];
  error: SerializedError | null;
}
export const fetchAllItems = createAsyncThunk("/items", async (thunkApi) => {
  return await fetchData("GET", "/items");
});

export const ItemSlice = createSlice({
  name: "items",
  initialState: {
    loading: false,
    items: [] as ItemType[],
    error: null,
  },
  reducers: {
    addItem: (state: ItemState, action: PayloadAction<ItemType>) => {
      state.items = [...state.items, action.payload];
    },
    updateItem: (state: ItemState, action: PayloadAction<ItemType>) => {
      let filtered = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = [...filtered, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllItems.pending, (state: ItemState) => {
      state.loading = true;
    });

    builder.addCase(fetchAllItems.fulfilled, (state: ItemState, action) => {
      state.loading = false;
      state.items = [...action.payload];
    });

    builder.addCase(fetchAllItems.rejected, (state: ItemState, action) => {
      state.error = action.error;
    });
  },
});

export const { addItem, updateItem } = ItemSlice.actions;

export const selectItems = (state: ItemState) => state;

export default ItemSlice.reducer;
