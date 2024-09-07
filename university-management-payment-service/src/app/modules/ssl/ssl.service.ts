import axios from 'axios';
import config from '../../../config';
import ApiError from '../../../errors/apiError';
import httpStatus from 'http-status';

const initPayment = async (payload: any) => {
  try {
    const data = {
      store_id: config.ssl.store_id,
      store_passwd: config.ssl.store_Password,
      total_amount: payload.total_amount,
      currency: 'BDT',
      tran_id: payload.tran_id, // use unique tran_id for each api call
      success_url: 'http://localhost:3000/payments?status=success',
      fail_url: 'http://localhost:3030/payments?status=error',
      cancel_url: 'http://localhost:3030/payments?status=warning',
      ipn_url: 'http://localhost:3030/ipn',
      shipping_method: 'N/A',
      product_name: 'Semester Payment.',
      product_category: 'Payment',
      product_profile: 'Student',
      cus_name: payload.cus_name,
      cus_email: payload.cus_email,
      cus_add1: payload.cus_add1,
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: payload.cus_phone,
      cus_fax: '01711111111',
      ship_name: 'Customer Name',
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh'
    };
    const response = await axios({
      method: 'post',
      url: config.ssl.payment_Url,
      data: data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    return response.data.redirectGatewayURL;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Payment Error');
  }
};
const validate = async (data: any) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${config.ssl.Validation_Url}?val_id=${data.val_id}&store_id=${config.ssl.store_id}&store_passwd=${config.ssl.store_Password}&format=json`
    });

    return response.data;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Payment Error');
  }
};
export const sslService = {
  initPayment,
  validate
};
