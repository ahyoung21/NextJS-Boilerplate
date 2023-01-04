import {
  createSlice,
  PayloadAction,
  Draft,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  status: string;
  data: {
    name: string;
    weather: [];
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
  };
}

const initialState: CounterState = {
  value: 0,
  status: '',
  data: {
    name: '',
    weather: [],
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
    },
  },
};

const asyncWeatherFetch = createAsyncThunk(
  'counterSlice/asyncWeatherFetch',
  async (cityName: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=kr&appid=${process.env.NEXT_PUBLIC_APIKEY}&units=metric`
    );
    const data = await response.json();
    return data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (
      state: Draft<typeof initialState>,
      action: PayloadAction<number>
    ) => {
      state.value -= action.payload;
    },
    incrementByAmount: (
      state: Draft<typeof initialState>,
      action: PayloadAction<number>
    ) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncWeatherFetch.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(asyncWeatherFetch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'complete';
    });
    builder.addCase(asyncWeatherFetch.rejected, (state, action) => {
      state.status = 'fail';
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
export { asyncWeatherFetch };
