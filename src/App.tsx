/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { BuyerDiscovery } from "./pages/BuyerDiscovery";
import { VendorDashboard } from "./pages/VendorDashboard";
import { AdminPanel } from "./pages/AdminPanel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<BuyerDiscovery />} />
          <Route path="vendor" element={<VendorDashboard />} />
          <Route path="admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
